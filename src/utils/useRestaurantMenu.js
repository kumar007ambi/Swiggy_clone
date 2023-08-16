import React, { useEffect,useState } from "react";
import { SWIGGY_MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_URL + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
