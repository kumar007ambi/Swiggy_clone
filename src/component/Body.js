import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { openResturantLabel } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { WEB_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import SecondHeader from "./SecondHeader";
//Body
const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredRestuarnt] = useState([]);
  const [allData,setAllData]=useState([]);
  //HOC
  // const OpenRestaurant = openResturantLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(WEB_API);
    const json = await data.json();
    //optional chaining
    setAllData(json);
    setListOfRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestuarnt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const customHook=useRestaurantList(WEB_API)
  //console.log(customHook)

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!!Please check your internet connection</h1>
    );

  //conditional rendering
  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-[180px]">
    <SecondHeader data={allData}/>
      {/* <div className="filter flex">
        <div className="search p-4 m-4 ">
          <input
            type="text"
            data-testid="searchInput"
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
                (res) => res.info.avgRating > 4
              );
              setListOfRest(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div> */}
      <div className="flex flex-wrap">
        {filteredResturant.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/restaurants/" + restuarant.info.id}
          >
            {/* {restuarant.info.isOpen ? (
              <OpenRestaurant resData={restuarant} />
            ) : ( */}
              <RestaurantCard resData={restuarant} />
            {/* )} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
