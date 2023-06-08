//ResturantCard
//we can also desctructure the props name as({resname,cuisine})
const ResturantCard = (props) => {
    //console.log(props);
    const { resData } = props;
    //help of optional chaining
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}
        />
        <h1>{name}</h1>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo / 100} </h4>
        <h4>{deliveryTime}minutes</h4>
      </div>
    );
  };

  export default ResturantCard;