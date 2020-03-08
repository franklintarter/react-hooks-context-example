import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [fruit, setFruit] = useState("Apple");

  const value = { fruit };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
