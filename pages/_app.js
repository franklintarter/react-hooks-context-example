import React from "react";
import { CartProvider } from "../context/cart-context";

export default ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};
