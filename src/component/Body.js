import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { openResturantLabel } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { WEB_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import SecondHeader from "./SecondHeader";
import Banner from "./Banner"
import ShimmerCard from "./ShimmerCard";
//Body
const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredRestuarnt] = useState([]);
  const [allData,setAllData]=useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  //HOC
  // const OpenRestaurant = openResturantLabel(RestaurantCard);
  const handleScroll = () => {
    //scrollY - how much I have scrolled
    // innerHeight - heigh of the window(visible setion)
    // document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchData();
    }
  };
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const fetchData = async () => {
    setShowShimmer(true);
    const data = await fetch(WEB_API);
    const json = await data.json();
    setShowShimmer(false);
    //optional chaining
    setAllData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
   
    setListOfRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   
    setFilteredRestuarnt((filteredResturant) =>[...filteredResturant,...
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ]);
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
    <div className="body max-w-[1080px] mx-auto pt-[80px] pb-48">
    
    <SecondHeader data={allData}/>
    <Banner/>
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
      <div className="restaurant-container grid grid-cols-4 gap-8">
        {filteredResturant.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/restaurants/" + restuarant.info.id}
            className="transition-all duration-100 hover:scale-95"
          >
            {/* {restuarant.info.isOpen ? (
              <OpenRestaurant resData={restuarant} />
            ) : ( */}
              <RestaurantCard resData={restuarant} />
            {/* )} */}
          </Link>
        ))}
      </div>
      {showShimmer && <ShimmerCard className="flex flex-wrap"  />}
    </div>
  );
};

export default Body;
