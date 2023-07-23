import React from "react";
import ReactDOM from "react-dom/client";

const resObj = [
  {
    id: "614561",
    name: "Subway",
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    locality: "Majiwada",
    areaName: "Rustomjee Urbania Azziano K Wing",
    costForTwo: "₹350 for two",
    cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 3.7,
    restaurantId: "614561",
    totalFee: 3600,
    parentId: "2",
    avgRatingString: "3.7",
    totalRatingsString: "500+",
    lastMileTravel: 1.7,
    mindeliveryTime: 32,
    maxdeliveryTime: 32,
    serviceability: "SERVICEABLE",
    slaString: "32 mins",
    lastMileTravelString: "1.7 km",
    iconType: "ICON_TYPE_EMPTY",
    nextCloseTime: "2023-07-23 02:00:00",
    opened: true,
  },
  {
    id: "614562",
    name: "Pizza Hut",
    cloudinaryImageId: "23ad45b63f97a121cb5d34e678cc343e",
    locality: "Thane West",
    areaName: "Hiranandani Estate",
    costForTwo: "₹600 for two",
    cuisines: ["Pizza", "Pasta", "Garlic Bread", "Beverages"],
    avgRating: 4.2,
    restaurantId: "614562",
    totalFee: 4500,
    parentId: "5",
    avgRatingString: "4.2",
    totalRatingsString: "800+",
    lastMileTravel: 2.3,
    mindeliveryTime: 45,
    maxdeliveryTime: 45,
    serviceability: "SERVICEABLE",
    slaString: "45 mins",
    lastMileTravelString: "2.3 km",
    iconType: "ICON_TYPE_FILLED",
    nextCloseTime: "2023-07-23 01:30:00",
    opened: true,
  },
  {
    id: "614563",
    name: "Burger King",
    cloudinaryImageId: "3c12ed4a00dca78f1c4d9ec8a7df78a7",
    locality: "Viviana Mall",
    areaName: "Majiwada",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Fries", "Beverages"],
    avgRating: 3.9,
    restaurantId: "614563",
    totalFee: 2800,
    parentId: "7",
    avgRatingString: "3.9",
    totalRatingsString: "600+",
    lastMileTravel: 1.1,
    mindeliveryTime: 28,
    maxdeliveryTime: 28,
    serviceability: "SERVICEABLE",
    slaString: "28 mins",
    lastMileTravelString: "1.1 km",
    iconType: "ICON_TYPE_HALF_FILLED",
    nextCloseTime: "2023-07-23 03:15:00",
    opened: true,
  },
  {
    id: "614564",
    name: "Sushi Express",
    cloudinaryImageId: "1b6c9d81b13cb8f697e2ebd4f9e29f11",
    locality: "Pokhran Road",
    areaName: "Vartak Nagar",
    costForTwo: "₹800 for two",
    cuisines: ["Sushi", "Japanese", "Asian", "Desserts"],
    avgRating: 4.5,
    restaurantId: "614564",
    totalFee: 5000,
    parentId: "9",
    avgRatingString: "4.5",
    totalRatingsString: "1200+",
    lastMileTravel: 3.5,
    mindeliveryTime: 40,
    maxdeliveryTime: 40,
    serviceability: "SERVICEABLE",
    slaString: "40 mins",
    lastMileTravelString: "3.5 km",
    iconType: "ICON_TYPE_FILLED",
    nextCloseTime: "2023-07-23 02:30:00",
    opened: true,
  },
  {
    id: "614565",
    name: "Dunkin' Donuts",
    cloudinaryImageId: "8d72fb40be0ab4e12652d2e2f6c46ba8",
    locality: "Teen Hath Naka",
    areaName: "LBS Marg",
    costForTwo: "₹300 for two",
    cuisines: ["Donuts", "Coffee", "Beverages"],
    avgRating: 3.2,
    restaurantId: "614565",
    totalFee: 2000,
    parentId: "11",
    avgRatingString: "3.2",
    totalRatingsString: "400+",
    lastMileTravel: 0.8,
    mindeliveryTime: 25,
    maxdeliveryTime: 25,
    serviceability: "SERVICEABLE",
    slaString: "25 mins",
    lastMileTravelString: "0.8 km",
    iconType: "ICON_TYPE_EMPTY",
    nextCloseTime: "2023-07-23 01:45:00",
    opened: true,
  },
  {
    id: "614566",
    name: "Biryani House",
    cloudinaryImageId: "f73f90208cfb64393f2b8c4b09a8ac7f",
    locality: "Ghodbunder Road",
    areaName: "Anand Nagar",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "Kebabs", "Curries", "Beverages"],
    avgRating: 4.1,
    restaurantId: "614566",
    totalFee: 3000,
    parentId: "13",
    avgRatingString: "4.1",
    totalRatingsString: "900+",
    lastMileTravel: 1.5,
    mindeliveryTime: 35,
    maxdeliveryTime: 35,
    serviceability: "SERVICEABLE",
    slaString: "35 mins",
    lastMileTravelString: "1.5 km",
    iconType: "ICON_TYPE_FILLED",
    nextCloseTime: "2023-07-23 02:15:00",
    opened: true,
  },
  {
    id: "614567",
    name: "The Coffee House",
    cloudinaryImageId: "bb9eb1191b5c5f602fa981024e6fbb1f",
    locality: "Kolshet Road",
    areaName: "Dhokali Naka",
    costForTwo: "₹250 for two",
    cuisines: ["Coffee", "Tea", "Muffins", "Snacks"],
    avgRating: 3.8,
    restaurantId: "614567",
    totalFee: 1800,
    parentId: "15",
    avgRatingString: "3.8",
    totalRatingsString: "300+",
    lastMileTravel: 1.0,
    mindeliveryTime: 30,
    maxdeliveryTime: 30,
    serviceability: "SERVICEABLE",
    slaString: "30 mins",
    lastMileTravelString: "1.0 km",
    iconType: "ICON_TYPE_HALF_FILLED",
    nextCloseTime: "2023-07-23 03:30:00",
    opened: true,
  },
  {
    id: "614568",
    name: "Taco Bell",
    cloudinaryImageId: "25e5b31be8f0a30364c83d80d4cd3c39",
    locality: "Manpada",
    areaName: "High Street Mall",
    costForTwo: "₹450 for two",
    cuisines: ["Tacos", "Burritos", "Nachos", "Beverages"],
    avgRating: 3.9,
    restaurantId: "614568",
    totalFee: 2500,
    parentId: "17",
    avgRatingString: "3.9",
    totalRatingsString: "700+",
    lastMileTravel: 1.4,
    mindeliveryTime: 30,
    maxdeliveryTime: 30,
    serviceability: "SERVICEABLE",
    slaString: "30 mins",
    lastMileTravelString: "1.4 km",
    iconType: "ICON_TYPE_HALF_FILLED",
    nextCloseTime: "2023-07-23 02:45:00",
    opened: true,
  },
  {
    id: "614569",
    name: "Barbeque Nation",
    cloudinaryImageId: "2f2aa40968298df064cf750e855c6fe2",
    locality: "Thane West",
    areaName: "Korum Mall",
    costForTwo: "₹900 for two",
    cuisines: ["Barbecue", "Indian", "Mughlai", "Desserts"],
    avgRating: 4.4,
    restaurantId: "614569",
    totalFee: 6000,
    parentId: "19",
    avgRatingString: "4.4",
    totalRatingsString: "1400+",
    lastMileTravel: 2.8,
    mindeliveryTime: 50,
    maxdeliveryTime: 50,
    serviceability: "SERVICEABLE",
    slaString: "50 mins",
    lastMileTravelString: "2.8 km",
    iconType: "ICON_TYPE_FILLED",
    nextCloseTime: "2023-07-23 02:15:00",
    opened: true,
  },
  {
    id: "614570",
    name: "Dominos",
    cloudinaryImageId: "b9430e3c967a1f8281d4b2c127b05e99",
    locality: "Ghodbunder Road",
    areaName: "Brahmand Phase 7",
    costForTwo: "₹500 for two",
    cuisines: ["Pizza", "Garlic Bread", "Pasta", "Beverages"],
    avgRating: 4.0,
    restaurantId: "614570",
    totalFee: 2800,
    parentId: "21",
    avgRatingString: "4.0",
    totalRatingsString: "1000+",
    lastMileTravel: 1.3,
    mindeliveryTime: 35,
    maxdeliveryTime: 35,
    serviceability: "SERVICEABLE",
    slaString: "35 mins",
    lastMileTravelString: "1.3 km",
    iconType: "ICON_TYPE_HALF_FILLED",
    nextCloseTime: "2023-07-23 01:45:00",
    opened: true,
  },
  {
    id: "614571",
    name: "KFC",
    cloudinaryImageId: "2f5f711687ef31efb08a64ab2df14a09",
    locality: "Thane West",
    areaName: "Vijay Garden",
    costForTwo: "₹600 for two",
    cuisines: ["Chicken", "Burgers", "Fries", "Beverages"],
    avgRating: 3.5,
    restaurantId: "614571",
    totalFee: 3200,
    parentId: "23",
    avgRatingString: "3.5",
    totalRatingsString: "600+",
    lastMileTravel: 1.9,
    mindeliveryTime: 40,
    maxdeliveryTime: 40,
    serviceability: "SERVICEABLE",
    slaString: "40 mins",
    lastMileTravelString: "1.9 km",
    iconType: "ICON_TYPE_HALF_FILLED",
    nextCloseTime: "2023-07-23 02:30:00",
    opened: true,
  },
  {
    id: "614572",
    name: "Mainland China",
    cloudinaryImageId: "9e0d787d14535697ab6e1194323c1b98",
    locality: "Pokhran Road",
    areaName: "Vartak Nagar",
    costForTwo: "₹1000 for two",
    cuisines: ["Chinese", "Asian", "Dimsums", "Seafood"],
    avgRating: 4.6,
    restaurantId: "614572",
    totalFee: 6000,
    parentId: "25",
    avgRatingString: "4.6",
    totalRatingsString: "1800+",
    lastMileTravel: 3.5,
    mindeliveryTime: 50,
    maxdeliveryTime: 50,
    serviceability: "SERVICEABLE",
    slaString: "50 mins",
    lastMileTravelString: "3.5 km",
    iconType: "ICON_TYPE_FILLED",
    nextCloseTime: "2023-07-23 02:15:00",
    opened: true,
  },
  {
    id: "614573",
    name: "Wendy's",
    cloudinaryImageId: "6b2a76cf3c47260b383421f0ea3f682e",
    locality: "Thane West",
    areaName: "Viviana Mall",
    costForTwo: "₹450 for two",
    cuisines: ["Burgers", "Chicken", "Fries", "Beverages"],
    avgRating: 3.4,
    restaurantId: "614573",
    totalFee: 3000,
    parentId: "27",
    avgRatingString: "3.4",
    totalRatingsString: "500+",
    lastMileTravel: 1.6,
    mindeliveryTime: 35,
    maxdeliveryTime: 35,
    serviceability: "SERVICEABLE",
    slaString: "35 mins",
    lastMileTravelString: "1.6 km",
    iconType: "ICON_TYPE_HALF_FILLED",
    nextCloseTime: "2023-07-23 01:45:00",
    opened: true,
  },
  {
    id: "614574",
    name: "Paradise Biryani",
    cloudinaryImageId: "64e4e32a6466b783117ac40a04920f75",
    locality: "Kolshet Road",
    areaName: "Brahmand Phase 8",
    costForTwo: "₹600 for two",
    cuisines: ["Biryani", "Kebabs", "Curries", "Beverages"],
    avgRating: 4.2,
    restaurantId: "614574",
    totalFee: 3200,
    parentId: "29",
    avgRatingString: "4.2",
    totalRatingsString: "700+",
    lastMileTravel: 2.0,
    mindeliveryTime: 40,
    maxdeliveryTime: 40,
    serviceability: "SERVICEABLE",
    slaString: "40 mins",
    lastMileTravelString: "2.0 km",
    iconType: "ICON_TYPE_FILLED",
    nextCloseTime: "2023-07-23 02:15:00",
    opened: true,
  },
];

const RestaurantCart = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, mindeliveryTime } = resData;

  return (
    <div className="res-card" style={{background: "#f0f0f0"}}>
      <img
        className="res-logo"
        alt="rice bowl"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mx2xvec1dkyu8yxor1ml"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{mindeliveryTime}</h5>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/original/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((x, index) => (
            <RestaurantCart key={x.id} resData={x} />
        ))}
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
