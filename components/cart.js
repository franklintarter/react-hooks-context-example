import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

export default () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="shadow p-6 mt-12">
      {cartItems.length === 0 ? <div>empty</div> : <div>not empty</div>}
    </div>
  );
};
