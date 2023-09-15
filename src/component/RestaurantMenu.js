import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../component/Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { SWIGGY_MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  //custom hooks
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(SWIGGY_MENU_URL + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(itemCards);

  return (
    <div className="menu bg-slate-200">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            😋{item.card.info.name} -{" Rs. "}{" "}
            💰{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
