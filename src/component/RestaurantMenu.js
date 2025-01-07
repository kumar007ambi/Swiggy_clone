import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../component/Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { SWIGGY_MENU_URL } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiShoppingBag } from"react-icons/fi"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenu(resId);
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  console.log("cartItems", cartItems,totalAmount);
  
 
  if (!restaurantData) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantData?.cards[2]?.card?.card?.info;
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const restaurant = restaurantData?.cards[0]?.card?.card?.info;
  const categories =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category =>{
      if(category.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        return category;
   });
  

  return (
    <div className="max-w-[800px] min-h-[800px] mx-auto pt-[120px] pb-[100px]">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* controlled components */}
      {/* categories accordions  */} 
      {categories?.map((category,index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          restaurant={restaurant}
        />
      ))}
      {/* Cart Details */}
            {
                cartItems && cartItems?.length > 0 &&
                <div className="fixed bottom-0 h-14 flex text-white justify-between py-2 px-4 items-center max-w-[800px] min-w-[800px] bg-[#60b246]">
                    <div className="text-sm font-medium">{cartItems?.length} items | ₹{totalAmount}</div>
                    
                    <Link to="/cart" className="flex items-center uppercase text-sm font-semibold">
                        <span className="mr-2">
                            View Cart
                        </span>
                        <FiShoppingBag size={15} />
                    </Link>
                </div>
            }
    </div>
  );
};

export default RestaurantMenu;
