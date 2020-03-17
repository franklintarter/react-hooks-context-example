import React from "react";

export default ({ name, price, removeFromCart }) => {
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
