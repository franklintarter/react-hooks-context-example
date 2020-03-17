import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

const PhotoCredit = ({ name, url }) => {
  return (
    <a
      style={{
        "background-color": "black",
        color: "white",
        "text-decoration": "none",
        padding: "4px 6px",
        "font-family":
          "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial, sans-serif",
        "font-size": "12px",
        "font-weight": "bold",
        "line-height": "1.2",
        display: "inline-block",
        "border-radius": "3px"
      }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Download free do whatever you want high-resolution photos from Mrushad Khombhadia"
      className="mr-3"
    >
      <span style={{ display: "inline-block", padding: "2px 3px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "12px",
            width: "auto",
            position: "relative",
            "vertical-align": "middle",
            top: "2px",
            fill: "white"
          }}
          viewBox="0 0 32 32"
        >
          <title>unsplash-logo</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
        </svg>
      </span>
      <span style={{ display: "inline-block", padding: "2px 3px" }}>
        {name}
      </span>
    </a>
  );
};

export default ({ children }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-start">
                <div>
                  <div className="flex items-baseline">
                    <a
                      href="/"
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Shop
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      />
                    </svg>
                    <span className="text-xs text-gray-100 flex items-center justify-center absolute top-0 right-0 rounded-full bg-red-700 h-4 w-4">
                      {cartItems.length}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="px-4 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
          <h3 className="mb-4 text-red-900 text-xl border-b-2">
            Photo Credits
          </h3>
          <PhotoCredit
            name="Mrushad Khombhadia"
            url="https://unsplash.com/@mushyy?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          />
          <PhotoCredit
            name="Paul Gaudriault"
            url="https://unsplash.com/@pl_gt?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          />
          <PhotoCredit
            name="Irene Kredenets"
            url="https://unsplash.com/@ikredenets?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          />
        </footer>
      </div>
    </>
  );
};
