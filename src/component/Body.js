import ResturantCard from "./ResturantCard";
import restaurantList from "../utils/mockData";
//Body
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
         {
           restaurantList.map((restuarant)=>(
            <ResturantCard key={restuarant.data.id} resData={restuarant}/>
           ))
         }
        </div>
      </div>  
    );
  };

  export default Body;