import { CDN_URL } from "../utils/contants";

const RestaurantCart = (props) => {
    const { resData } = props;
    console.log("resData ==>", resData);
    console.log("cloudinaryImageId ==>", CDN_URL + resData.cloudinaryImageId);
    console.log("name ==>", resData.name);
    console.log("cuisines ==>", resData.cuisines);
    console.log("avgRating ==>", resData.avgRating);
    console.log("mindeliveryTime ==>", resData.mindeliveryTime);
    const { cloudinaryImageId, name, cuisines, avgRating, mindeliveryTime } = resData.info;
    
    //var joinedCuisines = cuisines.join(", ");
    return (
      <div className="res-card" style={{background: "#f0f0f0"}}>
        <img
          className="res-logo"
          alt="rice bowl"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}</h5>
        <h5>{mindeliveryTime}</h5>
      </div>
    );
  };

  export default RestaurantCart;