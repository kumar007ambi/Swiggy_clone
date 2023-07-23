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
if(resInfo === null) return ( <Shimmer />)

const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(itemCards)

  return  (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(',')} - {costForTwoMessage}</h3>
     
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
