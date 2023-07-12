import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
//Header
const Header = () => {
  const [btnReactName, setBtnReactName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnReactName==="Login"?
              setBtnReactName("Logout")
              :setBtnReactName("Login");
            }}
          >
           {btnReactName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
