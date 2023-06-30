import { CDN_URL } from "../utils/constant";
import React from "react";
//ResturantCard
//we can also desctructure the props name as({resname,cuisine})
const ResturantCard = (props) => {
    //console.log(props);
    const { resData } = props;
    //help of optional chaining
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h1>{name}</h1>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo / 100} </h4>
        <h4>{deliveryTime}minutes</h4>
      </div>
    );
  };

  export default ResturantCard;