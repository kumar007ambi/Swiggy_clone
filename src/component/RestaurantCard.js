import { CDN_URL } from "../utils/constant";
import React from "react";
import ratingStar from "../assets/svgImages/rating-svgrepo-com.svg";
import dot from "../assets/svgImages/dot-svgrepo-com.svg";
import { MdStars } from "react-icons/md"
//ResturantCard
//we can also desctructure the props name as({resname,cuisine})
const RestaurantCard = (props) => {

  const { resData } = props;
  const { slaString } = resData?.info?.sla;
  //help of optional chaining
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality, aggregatedDiscountInfoV3
  } =
    resData?.info;
  let discountInfo = "";

  if (aggregatedDiscountInfoV3) {
    const { header, subHeader } = aggregatedDiscountInfoV3;
    discountInfo = (header ? header + " " : "") + (subHeader ? subHeader : "");
  }
  return (
    <div className="p-0 text-sm h-full">
      <div
        data-testid="resCard"
        className="w-[285px] h-[278px] rounded-lg m-1 p-1"
      >
        <div className="w-[100%] h-[100%] object-cover">
          <img
            className="object-cover rounded-xl w-[90%] h-[55%]  "
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />

          <div className="font-bold text-[21px] w-auto whitespace-nowrap text-[#ffffffeb]">
            {discountInfo}
          </div>

        </div>
        <div className="">
          <div className="mt-[-113px] ">
            <h3 className="font-bold text-lg truncate overflow-hidden whitespace-nowrap">{name}</h3>
          </div>
          <div
            className="h-5 w-5"
          >
            <MdStars className="align-middle" size={22} color="#0f8a65" />
          </div>
          <div className="ml-[24px] mt-[-20px] font-bold" >
            <h4>{avgRating} <img className="w-5 h-10 ml-[15px] mt-[-30px]" src={dot} alt="dot" /></h4>
          </div>
          <div className="ml-[55px] mt-[-30px] font-bold" >
            <h4>
              <h4> {slaString} </h4>{" "}
            </h4>
          </div>
        </div>
        <div className="">
          <h4 style={{ color: 'rgba(2, 6, 12, 0.6)' }}>{cuisines.join(", ").substring(0, 30) + "..."}</h4>
        </div>
        <div>
          <h4 style={{ color: 'rgba(2, 6, 12, 0.6)' }}>{locality.substring(0, 20) + "..."}</h4>
        </div>

      </div>
    </div>
  );
};






export default RestaurantCard;
