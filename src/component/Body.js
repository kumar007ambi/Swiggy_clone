import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { WEB_API } from "../utils/constant";
//Body
const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant,setFilteredRestuarnt]=useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(WEB_API);
    const json = await data.json();
    //optional chaining
    setListOfRest(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestuarnt(json?.data?.cards[2]?.data?.data?.cards)
  };
  //conditional rendering
  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the resturant card according to text and Updates the UI
              console.log(searchText);
              const filteredResturant = listOfRest.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestuarnt(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredResturant.map((restuarant) => (
          <Link key={restuarant.data.id} to={"/restaurants/"+restuarant.data.id}><RestaurantCard  resData={restuarant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;