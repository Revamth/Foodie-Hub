import { LOGO_URL, CART_IMAGE } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center border-b border-gray-300 p-4 bg-white shadow-md sticky top-0 z-50">
      <div>
        <Link to="/">
          <img className="w-20 h-auto" src={LOGO_URL} alt="Foodie Hub" />
        </Link>
      </div>
      <nav className="flex items-center">
        <ul className="flex items-center space-x-6 text-lg font-bold">
          <li>
            <Link to="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="relative" aria-label="Cart">
              <img
                className="w-10 h-10 bg-green-600 rounded-full p-2 shadow-md hover:bg-green-700 transition-all"
                src={CART_IMAGE}
                alt="Cart"
              />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems?.length || 0}
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={btnName === "Login" ? "/login" : "/"}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
