import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import Product from "./product";

const createProductElements = (products, cartItems) => {
  return products
    .filter(p => !cartItems.includes(p.name))
    .map(p => <Product key={p.name} product={p} />);
};

export default () => {
  const { products, cartItems } = useContext(CartContext);
  const productEls = createProductElements(products, cartItems);
  return <div className="flex flex-wrap">{productEls}</div>;
};
