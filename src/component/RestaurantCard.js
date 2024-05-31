import { CDN_URL } from "../utils/constant";
import React from "react";
//ResturantCard
//we can also desctructure the props name as({resname,cuisine})
const RestaurantCard = (props) => {
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
    } = resData?.info;

    return (
      <div data-testid="resCard" className="m-4 p-1 w-[285px] h-[278px] rounded-lg bg-cover">
        <img
          className="rounded w-[90%] h-[55%] cover "
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h1>{name}</h1>
        {/* <h4>{cuisines.join(", ")}</h4> */}
        <h4 >⭐{avgRating}. {deliveryTime}</h4>
        <h4>{costForTwo} </h4>
      </div>
    );
  };
//Higher order Component
//Higher order Component
// export const openResturantLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute bg-black text-white m-2 p-2 rounded-md">Open</label>
//         <RestaurantCard {...props}/>
//       </div>
//     );
//   };
// };

export default RestaurantCard;
