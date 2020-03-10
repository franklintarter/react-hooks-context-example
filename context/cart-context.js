import React, { useState } from "react";

const CartContext = React.createContext();

const products = [
  {
    name: "Test",
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
  const [fruit, setFruit] = useState("Apple");
  const [cartItems, setCartItems] = useState([]);

  // const cartItems = [];

  const addToCart = name => {
    setCartItems([name, ...cartItems]);
    // cartItems.push(name);
    console.log(cartItems);
  };

  // const addToCart(productId) => {

  // }

  const value = { fruit, products, cartItems, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
