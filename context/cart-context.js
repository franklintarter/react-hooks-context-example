import React, { useState } from "react";

const CartContext = React.createContext();

// From CMS/API
const products = [
  {
    sku: "SHIRT-1",
    name: "Red Striped Shirt",
    price: 29.99,
    image: "/mrushad-khombhadia-GlgDs6_WhTg-unsplash.jpg"
  },
  {
    sku: "SHOES-1",
    name: "Colorful Shoes",
    price: 59.99,
    image: "/irene-kredenets-dwKiHoqqxk8-unsplash.jpg"
  },
  {
    sku: "SHOES-2",
    name: "Red Shoes",
    price: 109.99,
    image: "/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg"
  }
];

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = sku => {
    const itemToAdd = products.find(item => item.sku === sku);
    const nextCartItems = [itemToAdd, ...cartItems];
    setCartItems(nextCartItems);
  };

  const removeFromCart = sku => {
    const nextCartItems = cartItems.filter(item => item.sku !== sku);
    setCartItems(nextCartItems);
  };

  const value = { products, cartItems, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
