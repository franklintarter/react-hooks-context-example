import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import CartItem from "./CartItem";

export default () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const subtotal = cartItems
    .map(item => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  const cartIsEmpty = cartItems.length === 0;

  return (
    <div className="shadow mt-12">
      <div className="p-3">
        <h2 className="text-2xl text-red-700">Cart</h2>
      </div>
      <div>
        {cartIsEmpty ? (
          <p className="p-3 pt-0 text-gray-700 text-xl">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <CartItem
                key={item.sku}
                name={item.name}
                price={item.price}
                removeFromCart={() => removeFromCart(item.sku)}
              />
            ))}
            <div className="mt-2 border-t pt-3 pb-3 px-3">
              <div className="flex items-baseline justify-between">
                <h3 className="text-gray-600 text-md">Subtotal</h3>
                <p className="text-gray-700 text-xl">${subtotal}</p>
              </div>
              <button
                type="button"
                className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
