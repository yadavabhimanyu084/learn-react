import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantCart = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="rice bowl"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mx2xvec1dkyu8yxor1ml"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North India, Asian</h4>
      <h5>4.4 stars</h5>
      <h5>44 minutes</h5>
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
      <RestaurantCart />
      <RestaurantCart />
      <RestaurantCart />
      <RestaurantCart />
        <RestaurantCart />
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
