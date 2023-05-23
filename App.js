import React from "react";
import ReactDOM from "react-dom/client";

//Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//ResturantCard
//we can also desctructure the props name as({resname,cuisine})
const ResturantCard = (props) => {
  console.log(props);
  const { resName, cuisine, rating, timing } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/chkxewmdvnhloxmfawij"
      />
      <h1>{resName}</h1>
      <h4>{cuisine}</h4>
      <h4>{rating} Stars</h4>
      <h4>{timing} minutes</h4>
    </div>
  );
};

//Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard
          resName="Meghna Foods"
          cuisine="Biryani,North Indian,Asian"
          rating="4.4"
          timing="38"
        />
        <ResturantCard
          resName="KFC"
          cuisine="Chicken Nugets,Fries,Burgers"
          rating="4.3"
          timing="30"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
