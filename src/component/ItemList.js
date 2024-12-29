import { CDN_URL } from "../utils/constant";
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from "../utils/cartSlice";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ItemList = ({ items, dummy }) => {
  // console.log(items);
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
    console.log("log", item?.card?.info?.name)
    toast.success(`${item?.card?.info?.name} added to cart!`);
  };
  return (
    <div>
      <ToastContainer />
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-3 m-3 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}- ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}

              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
