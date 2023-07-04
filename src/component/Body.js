import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import restaurantList from "../utils/mockData";
//Body
const Body = () => {
  const [listOfRest, setListOfRest] = useState(restaurantList);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData=async()=>{
     const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6808046&lng=88.3757783&page_type=DESKTOP_WEB_LISTING");
     const json=await data.json();
     console.log(json);
     //optional chaining
     setListOfRest(json?.data?.cards[2]?.data?.data?.cards)
  }
  if(listOfRest.length===0){
    
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRest.map((restuarant) => (
          <ResturantCard key={restuarant.data.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
