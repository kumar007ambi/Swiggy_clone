import { useState } from "react";
import ItemList from "./ItemList";
import ItemCateogoryList from "./ItemCateogoryList";

const RestaurantCategory = ({ data, restaurant }) => {
  const [showItems, setshowItems] = useState(true);
  const { title, itemCards } = data;
  //console.log("itemCards", itemCards);
  //accordian open close logic
  const handleShowToggle = () =>
    setshowItems(showItems => !showItems);
  
  return (
    <div className="border-b-4">
      <div
        className="flex justify-between font-bold cursor-pointer px-2 py-4"
        onClick={handleShowToggle}
      >
        <span>
          {title} ({itemCards?.length})
        </span>
        {showItems ? <span>⬇️</span> : <span>⬆</span>}

      </div>
     {showItems && (
        <div className={`collapsible transition-[height] duration-300 ${showItems ? 'h-[auto]' : 'h-0'}`}>
          {itemCards?.map((item) => (
            <ItemList
              key={item?.card?.info?.id}
              data={item?.card?.info}
              restaurant={restaurant}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
