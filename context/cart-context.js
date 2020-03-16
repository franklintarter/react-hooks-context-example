import React, { useState } from "react";

const CartContext = React.createContext();

const products = [
  {
    name: "Red Striped Shirt",
    price: 123,
    image: "/mrushad-khombhadia-GlgDs6_WhTg-unsplash.jpg"
  },
  {
    name: "Test 2",
    price: 123,
    image: "/mrushad-khombhadia-GlgDs6_WhTg-unsplash.jpg"
  },
  {
    name: "Test 3",
    price: 123,
    image: "/mrushad-khombhadia-GlgDs6_WhTg-unsplash.jpg"
  },
  {
    name: "Test 4",
    price: 123,
    image: "/mrushad-khombhadia-GlgDs6_WhTg-unsplash.jpg"
  }
];

const discounts = [
  {
    code: "SPRING2020",
    totalCartDiscount: true,
    discountAmountPercentage: 20,
    items: []
  }
];

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = name => {
    setCartItems([name, ...cartItems]);
  };

  const value = { products, cartItems, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
