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

const resObj = {
    type: "restaurant",
    data: {
      type: "F",
      id: "260833",
      name: "The Southern Pantry",
      uuid: "ce19ed57-ac60-4c22-a4e0-02e1de4cf6c9",
      city: "7",
      area: "Belghoria",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "tl71kut6rzgpntixvqbw",
      cuisines: ["South Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 43,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "40-50 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "the-southern-pantry-belghoria-belghoria",
        city: "kolkata",
      },
      cityState: "7",
      address: "8 B.T Road, belghoria, Kol- 56",
      locality: "Bt Road",
      parentId: 214091,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6769705~p=1~eid=00000188-58c4-bb92-76d0-34d6003d0132",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹449",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "260833",
        deliveryTime: 43,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  }

//ResturantCard
//we can also desctructure the props name as({resname,cuisine})
const ResturantCard = (props) => {
  console.log(props);
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/chkxewmdvnhloxmfawij"
      />
      <h1>{resData.data.name}</h1>
      <h4>{resData.data.cuisines}</h4>
      <h4>{resData.data.avgRating} Stars</h4>
      <h4>{resData.data.costForTwo / 100} </h4>
      <h4>{resData.data.deliveryTime}minutes</h4>
    </div>
  );
};

//Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard resData={resObj} />
        <ResturantCard resData={resObj} />
        <ResturantCard resData={resObj} />
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
