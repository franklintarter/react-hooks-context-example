import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

export default ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { name, image } = product;
  return (
    <div className="w-100 mt-12 flex justify-center">
      <div className="px-4 xs:w-2/3 sm:w-2/3 lg:w-1/2">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <img alt={name} src={image} />
          <div className="px-4 pt-5 pt-2 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
              A nice description goes here.
            </p>
          </div>
          <div>
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:px-6 py-4 flex items-center justify-between">
                <dt className="text-xl leading-5 font-medium text-gray-700">
                  $28
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  <button
                    type="button"
                    onClick={() => addToCart(name)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add To Cart
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
