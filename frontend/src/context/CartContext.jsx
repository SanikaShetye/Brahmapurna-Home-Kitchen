import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    // Notification message
    const [cartMessage, setCartMessage] = useState("");


    // =========================================
    // ADD TO CART
    // =========================================

    const addToCart = (food) => {

        setCartItems((currentItems) => {

            const existingItem = currentItems.find(
                (item) => item._id === food._id
            );

            if (existingItem) {

                return currentItems.map((item) =>
                    item._id === food._id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );

            }

            return [
                ...currentItems,
                {
                    ...food,
                    quantity: 1
                }
            ];
        });


        // Show notification
        setCartMessage(`${food.name} added to cart!`);

        // Automatically hide notification
        setTimeout(() => {
            setCartMessage("");
        }, 2500);
    };


    // =========================================
    // REMOVE FROM CART
    // =========================================

    const removeFromCart = (foodId) => {

        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item._id !== foodId
            )
        );
    };


    // =========================================
    // INCREASE QUANTITY
    // =========================================

    const increaseQuantity = (foodId) => {

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item._id === foodId
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    };


    // =========================================
    // DECREASE QUANTITY
    // =========================================

    const decreaseQuantity = (foodId) => {

        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item._id === foodId
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };


    // =========================================
    // CLEAR CART
    // =========================================

    const clearCart = () => {
        setCartItems([]);
    };


    // =========================================
    // TOTAL PRICE
    // =========================================

    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + Number(item.price) * item.quantity,
        0
    );


    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                totalPrice,
                cartMessage
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


// =========================================
// CUSTOM HOOK
// =========================================

export function useCart() {
    return useContext(CartContext);
}