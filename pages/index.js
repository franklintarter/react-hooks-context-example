import React, { useContext } from "react";
// import { CartContext } from "../context/cart-context";
import Products from "../components/products";
// import { CartContext } from "../context/cart-context";
import Layout from "../components/layout";
import "../styles/index.css";

export default () => {
  // console.log(ctx);
  // const cartContext = useContext(CartContext);
  // const numItems = cartContext.cartItems.length;

  return (
    <Layout>
      <div>
        <div className="">
          <Products />
        </div>
      </div>
    </Layout>
  );
};
