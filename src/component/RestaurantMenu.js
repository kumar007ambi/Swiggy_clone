import React, { useEffect, useState } from "react";
import Shimmer from "../component/Shimmer";
import { SWIGGY_MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_URL);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };



  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <h3>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(',')} - {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
     
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
