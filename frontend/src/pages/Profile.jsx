import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";

function Profile() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const savedUser = localStorage.getItem("user");

        if (!savedUser) {
            navigate("/login");
            return;
        }

        try {

            const user = JSON.parse(savedUser);

            setFormData({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                address: user.address || "",
                city: user.city || "",
                pincode: user.pincode || ""
            });

        } catch (error) {

            console.error(
                "Unable to load profile:",
                error
            );

            navigate("/login");
        }

    }, [navigate]);


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");


        const savedUser = localStorage.getItem("user");

        if (!savedUser) {
            navigate("/login");
            return;
        }


        let user;

        try {

            user = JSON.parse(savedUser);

        } catch (error) {

            setError("Unable to load user information.");
            return;

        }


        try {

            setLoading(true);


            const response = await fetch(
                `/api/auth/update/${user.id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        address: formData.address,
                        city: formData.city,
                        pincode: formData.pincode
                    })
                }
            );


            const data = await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Unable to update profile."
                );

            }


            /*
             * Save updated user details
             * in localStorage
             */

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );


            setFormData({
                name: data.user.name || "",
                email: data.user.email || "",
                phone: data.user.phone || "",
                address: data.user.address || "",
                city: data.user.city || "",
                pincode: data.user.pincode || ""
            });


            setSuccess(
                "Profile updated successfully!"
            );


            /*
             * Return to home after short delay
             */

            setTimeout(() => {
                navigate("/");
            }, 1200);


        } catch (error) {

            console.error(
                "Update Profile Error:",
                error
            );

            setError(
                error.message ||
                "Unable to update profile."
            );

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="auth-page">

            <div className="auth-card">

                <div className="auth-icon">
                    👤
                </div>


                <h1>
                    Update Profile
                </h1>


                <p className="auth-subtitle">
                    Update your Brahmapurna Home Kitchen details
                </p>


                {error && (
                    <div className="auth-error">
                        {error}
                    </div>
                )}


                {success && (
                    <div
                        className="auth-success"
                    >
                        {success}
                    </div>
                )}


                <form onSubmit={handleSubmit}>


                    {/* NAME */}

                    <div className="form-group">

                        <label>
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* EMAIL */}

                    <div className="form-group">

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* PHONE */}

                    <div className="form-group">

                        <label>
                            Mobile Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your mobile number"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            maxLength="10"
                            required
                        />

                    </div>


                    {/* ADDRESS */}

                    <div className="form-group">

                        <label>
                            Delivery Address
                        </label>

                        <textarea
                            name="address"
                            placeholder="Enter your complete delivery address"
                            value={formData.address}
                            onChange={handleChange}
                            rows="4"
                            required
                        />

                    </div>


                    {/* CITY */}

                    <div className="form-group">

                        <label>
                            City
                        </label>

                        <input
                            type="text"
                            name="city"
                            placeholder="Enter your city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* PINCODE */}

                    <div className="form-group">

                        <label>
                            Pincode
                        </label>

                        <input
                            type="text"
                            name="pincode"
                            placeholder="6-digit pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            pattern="[0-9]{6}"
                            maxLength="6"
                            required
                        />

                    </div>


                    {/* UPDATE BUTTON */}

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >

                        {loading
                            ? "Updating Profile..."
                            : "Update Profile"}

                    </button>


                    {/* CANCEL */}

                    <button
                        type="button"
                        className="profile-cancel-button"
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </button>


                </form>

            </div>

        </div>

    );
}

export default Profile;