import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../component/Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { SWIGGY_MENU_URL } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi"
import { Star, Clock } from 'lucide-react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenu(resId);
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);



  if (!restaurantData) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString, sla } =
    restaurantData?.cards[2]?.card?.card?.info;
  console.log(restaurantData?.cards[2]?.card?.card?.info)
  restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const restaurant = restaurantData?.cards[0]?.card?.card?.text;
 
  const categories =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => {
      if (category.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        return category;
    });


  return (
    <div className="max-w-[800px] min-h-[800px] mx-auto pt-[120px] pb-[100px]">
      <div className="w-80 p-4 hover:scale-95 transition-transform cursor-pointer">
        <div className="space-y-2">
          {/* Restaurant Name */}
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>

          {/* Ratings and Price */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-green-600 text-white px-2 py-0.5 rounded">
              <Star size={14} className="fill-current" />
              <span className="text-sm font-medium">4.3</span>
            </div>
            <span className="text-gray-500 text-sm">{totalRatingsString}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-700 text-sm"> {cuisines.join(",")}-{costForTwoMessage}</span>
          </div>

          {/* Category */}
          

          {/* Location and Time */}
          <div className="pt-2 border-t border-gray-200 mt-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded">
                <Clock size={14} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{sla?.minDeliveryTime}-MINS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* controlled components */}
      {/* categories accordions  */}
      {categories?.map((category, index) => (
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
