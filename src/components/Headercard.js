import { LOGO_URL, CART_IMAGE } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="Foodie Hub" />
      </div>
      <div className="nav-items">
        <ul className="">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <img className="cart" src={CART_IMAGE} to="/cart"></img>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              if (btnName === "Login") {
                setbtnName("Logout");
              } else {
                setbtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
