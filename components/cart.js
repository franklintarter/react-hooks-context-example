import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

const CartItem = ({ name, price, removeFromCart }) => {
  return (
    <div className="flex items-baseline justify-between p-3 pt-0">
      <h3 className="text-gray-800 text-lg">{name}</h3>
      <div className="flex items-center">
        <p className="text-gray-700 text-md mr-2">${price}</p>
        <button
          onClick={removeFromCart}
          className="text-xs underline text-gray-600 hover:text-red-800"
          type="button"
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const cartEls = cartItems.map(item => (
    <CartItem
      key={item.sku}
      name={item.name}
      price={item.price}
      removeFromCart={() => removeFromCart(item.sku)}
    />
  ));
  const price = cartItems
    .map(item => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <div className="shadow mt-12">
      <div className="p-3">
        <h2 className="text-2xl text-red-700">Cart</h2>
      </div>
      <div>
        {cartItems.length === 0 ? (
          <p className="p-3 pt-0 text-gray-700 text-xl">Your cart is empty.</p>
        ) : (
          <div>
            {cartEls}
            <div className="mt-2 border-t pt-3 pb-3 px-3">
              <div className="flex items-baseline justify-between">
                <h3 className="text-gray-600 text-md">Subtotal</h3>
                <p className="text-gray-700 text-xl">${price}</p>
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
