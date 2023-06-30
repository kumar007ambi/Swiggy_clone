import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import restaurantList from "../utils/mockData";
//Body
const Body = () => {
  const [listOfRest, setListOfRest] = useState(restaurantList);
  useEffect(() => {}, []);
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
