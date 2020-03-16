import React, { useContext } from "react";
// import { CartContext } from "../context/cart-context";
import Products from "../components/products";
// import { CartContext } from "../context/cart-context";
import Layout from "../components/layout";
import "../styles/index.css";
import Cart from "../components/cart";

export default () => {
  // console.log(ctx);
  // const cartContext = useContext(CartContext);
  // const numItems = cartContext.cartItems.length;

  return (
    <Layout>
      <div>
        <div className="flex justify-center w-100">
          <div className="max-w-6xl flex">
            <div className="justify-center w-2/3">
              <Products />
            </div>
            <div className="w-1/3">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
