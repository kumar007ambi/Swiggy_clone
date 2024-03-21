import { useState,useEffect } from 'react';

const useRestaurantList = (WEB_API) => {
  const [listOfRest, setListOfRest] = useState([]);

   useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(WEB_API);
    const json = await data.json();
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  
  return listOfRest;
}

export default useRestaurantList