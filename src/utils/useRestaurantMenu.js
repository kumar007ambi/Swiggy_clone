import React, { useEffect,useState } from "react";
import { SWIGGY_MENU_URL } from "../utils/constant";
import mockResMenu from "../component/mocks/mockResMenu.json";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      // const data = await fetch(SWIGGY_MENU_URL + resId); 
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6862992&lng=88.38947689999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
      if (!data.ok) {
        setResInfo(mockResMenu.data);
        return;
      }
      
      const json = await data.json();
      setResInfo(json?.data || mockResMenu.data);
    } catch (error) {
      setResInfo(mockResMenu.data);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
