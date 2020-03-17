import React from "react";
import Products from "../components/products";
import Layout from "../components/layout";
import "../styles/index.css";
import Cart from "../components/cart";

export default () => {
  return (
    <Layout>
      <div>
        <div className="m-auto flex justify-center w-100 md:w-4/5 lg:w-3/5 flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-100 sm:w-1/2 lg:w-2/3 sm:pr-4 lg:pr-10">
            <Products />
          </div>
          <div className="w-100 sm:w-1/2 lg:w-1/3">
            <Cart />
          </div>
        </div>
      </div>
    </Layout>
  );
};
