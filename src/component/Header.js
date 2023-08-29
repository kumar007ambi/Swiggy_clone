import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//Header
const Header = () => {
  const [btnReactName, setBtnReactName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-slate-400">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-white">
            Online Status : {onlineStatus === true ? "🟢" : "🔴"}
          </li>
          <li className="px-4 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/contact">Conatct Us</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-white">Cart</li>
          <li className="px-4 text-white">
            <button
              className="bg-cyan-800 w-[100px] rounded"
              onClick={() => {
                btnReactName === "Login"
                  ? setBtnReactName("Logout")
                  : setBtnReactName("Login");
              }}
            >
              {btnReactName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
