import { useEffect, useState } from "react";
import RestaurantCart from "./RestaurantCart";
import resObj from "../utils/mockData";

const Body = () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  // above line is simply called array destructuring

  useEffect(() => {
    console.log("use effect is called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log("json ==>", json);
    // Optional Chaining
    setListRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log("listRestaurant ==>", listRestaurant);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="search">Search</div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurant = listRestaurant.filter(
              (res) => res.avgRating > 4
            );
            setListRestaurant(filterRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listRestaurant.map((x, index) => (
          <RestaurantCart key={index} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
