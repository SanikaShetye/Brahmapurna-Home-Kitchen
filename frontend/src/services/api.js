import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

// Get all categories
export const getCategories = () => {
    return API.get("/categories");
};

// Get all foods
export const getFoods = () => {
    return API.get("/foods");
};

// Get single food
export const getFoodById = (id) => {
    return API.get(`/foods/${id}`);
};

export default API;