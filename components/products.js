import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import Product from "./product";

const filterAvailableProducts = (products, cartItems) => {
  const skusInCart = cartItems.map(item => item.sku);
  return products.filter(p => !skusInCart.includes(p.sku));
};

export default () => {
  const { products, cartItems } = useContext(CartContext);
  const availableProducts = filterAvailableProducts(products, cartItems);
  const productEls = availableProducts.map(p => (
    <Product key={p.sku} product={p} />
  ));
  return <div className="flex flex-wrap">{productEls}</div>;
};
