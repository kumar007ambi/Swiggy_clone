import { CDN_URL } from "../utils/constant";
import React from "react";
import ratingStar from "../assets/svgImages/rating-svgrepo-com.svg";
import dot from "../assets/svgImages/dot-svgrepo-com.svg";
import { MdStars } from "react-icons/md"
//ResturantCard
//we can also desctructure the props name as({resname,cuisine})
const RestaurantCard = (props) => {
  //console.log(props);
  const { resData } = props;
  const { deliveryTime } = resData?.info?.sla;
  //help of optional chaining
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo,locality,aggregatedDiscountInfoV3
 } =
    resData?.info;
let discountInfo = "";

    if(aggregatedDiscountInfoV3) {
        const { header, subHeader } = aggregatedDiscountInfoV3;
        discountInfo = (header ? header + " " : "") + (subHeader ? subHeader : "");
    }
  return (
    <div className="ml-10">
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
           {/* <div className="absolute bottom-0 left-0 right-0 h-[81px] text-left grid content-end px-3 pb-2  */}
                    {/* bg-gradient-to-b from-[#1b1e2400] to-[#1b1e24] rounded-2xl"> */}
                    <div className="font-bold text-[21px] w-auto whitespace-nowrap text-[#ffffffeb]">
                        {discountInfo}
                    </div>
                {/* </div> */}
        </div>
        <div className="">
          <div  className="mt-[-113px] font-bold">
            <h1 className="font-semibold text-lg truncate overflow-hidden whitespace-nowrap">{name}</h1>
          </div>
          <div
            className="h-5 w-5"
          >
            <MdStars className="align-middle" size={22} color="#0f8a65" /> 
          </div>
          <div className="ml-[24px] mt-[-22px] font-bold" >
            <h4>{avgRating} <img className="w-5 h-10 ml-[17px] mt-[-30px]" src={dot} alt="dot"/></h4>
          </div>
          <div className="ml-[55px] mt-[-34px] font-bold" >
            <h4>
              <h4> { deliveryTime} mins</h4>{" "}
            </h4>
          </div>
        </div>
        <div className="">
          <h4>{cuisines.join(", ").substring(0,30)+"..."}</h4>
        </div>
        <div>
        {/* <h4>{locality.substring(0,20)+"..."}</h4> */}
        </div>
      
      </div>
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
