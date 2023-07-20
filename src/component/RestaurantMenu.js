import React, { useEffect } from "react";
import { SWIGGY_MENU_URL } from "../utils/constant";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_URL);
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
        <li>Fries</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
