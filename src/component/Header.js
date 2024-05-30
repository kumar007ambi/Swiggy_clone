import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"
//Header
const Header = () => {
  const [btnReactName, setBtnReactName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  //console.log(data);

   // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-slate-400 h-24">
      <div className="logo-container">
        <img className="w-[101px]" src={LOGO_URL} />
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
           <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
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
