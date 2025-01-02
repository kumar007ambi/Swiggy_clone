import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../component/Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { SWIGGY_MENU_URL } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  //custom hooks
  const restaurantData = useRestaurantMenu(resId);
 // console.log("data",resInfo)
  const dummy = "Dummy Data";

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(SWIGGY_MENU_URL + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  if (restaurantData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantData?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //console.log("loggggg",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const restaurant = restaurantData?.cards[0]?.card?.card?.info;
  const categories =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log("catoehry",categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* controlled components */}
      {/* categories accordions  */} 
      {categories?.map((category,index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
           restaurant={restaurant}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
