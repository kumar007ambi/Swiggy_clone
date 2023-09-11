import { CDN_URL } from "../utils/constant";
import React from "react";
//ResturantCard
//we can also desctructure the props name as({resname,cuisine})
const ResturantCard = (props) => {
  //console.log(props);
  const { resData } = props;
  const { deliveryTime } = resData?.info?.sla;
  //help of optional chaining
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    // deliveryTime,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[200px] bg-slate-200">
      <img
        className="rounded "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};

//Higher order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">Open</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default ResturantCard;
