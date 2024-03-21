import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { WEB_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
//Body
const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredRestuarnt] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(WEB_API);
    const json = await data.json();
    //optional chaining
    setListOfRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestuarnt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const customHook=useRestaurantList(WEB_API)

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!!Please check your internet connection</h1>
    );

  //conditional rendering
  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4 ">
          <input
            type="text"
            className="border border-solid border-black rounded"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-0.5 bg-blue-400 m-3 rounded"
            onClick={() => {
              //filter the resturant card according to text and Updates the UI
              console.log(searchText);
              const filteredResturant = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestuarnt(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4 ">
          <button
            className="px-3 py-0.5 bg-green-400 m-3 rounded"
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
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/restaurants/" + restuarant.info.id}
          >
            {restuarant.info.isOpen ? (
              <RestaurantCardPromoted resData={restuarant} />
            ) : (
              <RestaurantCard resData={restuarant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
