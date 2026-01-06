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
      const data = await fetch(SWIGGY_MENU_URL + resId); 
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
