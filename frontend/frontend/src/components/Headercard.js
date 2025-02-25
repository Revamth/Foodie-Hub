import { LOGO_URL, CART_IMAGE } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between items-center border-2 border-gray-300 p-4 bg-white shadow-md">
      <div>
        <img className="w-20 h-auto" src={LOGO_URL} alt="Foodie Hub" />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6 text-lg font-bold">
          <li>
            <Link to="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img
                className="w-10 h-10 bg-green-600 rounded-full p-2 shadow-md hover:bg-green-700 transition-all"
                src={CART_IMAGE}
                alt="Cart"
              />
            </Link>
          </li>
          <li>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
