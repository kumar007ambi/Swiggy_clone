import { CDN_URL } from "../utils/constant";
import { useDispatch, useSelector } from 'react-redux'
import { addItem, computeTotal, setRestaurant } from "../utils/cartSlice";
// import { ToastContainer, toast } from 'react-toastify';
import { BsCaretDownSquare } from "react-icons/bs";

import 'react-toastify/dist/ReactToastify.css';

const ItemList = ({ data, restaurant }) => {
  // console.log("data", restaurant);
  const { name, price, defaultPrice, description, imageId, isVeg } = data;
  const dispatch = useDispatch()
  const selectedRestaurant = useSelector(state => state.cart.selectedRestaurant);

  // console.log("dat", selectedRestaurant);
  const handleAddItem = () => {
    // Dispatch an action
    let dataToAdd;
    if (!price) {
      dataToAdd = { ...data, price: defaultPrice, imageId: imageId };
    } else {
      dataToAdd = { ...data };
    }

    if (selectedRestaurant && selectedRestaurant?.id !== restaurant?.id) {
      // dispatch(addItem(dataToAdd));
    } else if (selectedRestaurant && selectedRestaurant?.id === restaurant?.id) {
      dispatch(addItem(dataToAdd));
      dispatch(computeTotal());
    } else {
      dispatch(setRestaurant(restaurant));
      dispatch(addItem(dataToAdd));
      dispatch(computeTotal());
    }
  }
  return (
    <div className="flex justify-between min-h-[102px] px-2 pt-1 pb-4 my-1 border-b-2 last:border-b-0">

      <div>
        <BsCaretDownSquare className="my-2" color={isVeg ? "#0f8a65" : "#e43b4f"} />
        <h3 className="font-medium text-md text-[#3e4152]">{name}</h3>
        <span className="text-sm text-[#3e4152]">₹{parseFloat(((price || defaultPrice) / 100).toFixed(2))}</span>
        <p className="mt-3 text-sm text-[#282c3f73] max-w-[750px] ">{description}</p>
      </div>
      <div className="relative w-28 h-[120px] py-5">
        {imageId && (
          <img
            className="rounded-md"
            src={`${CDN_URL}${imageId}`}
            alt="item-img"
          />
        )}
        <button className="p-1 w-16 rounded left-6 font-medium bottom-2 bg-white 
                    absolute border text-sm text-green-600 shadow drop-shadow-[0_3px_8px_#e9e9e2]"
          onClick={handleAddItem}
        >
          Add +
        </button>
      </div>
    </div>
  );
};
export default ItemList;
              
                  {/*   : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem}

              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div> */}