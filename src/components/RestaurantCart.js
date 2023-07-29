import { REST_IMG_URL } from "../utils/contants";

const RestaurantCart = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, mindeliveryTime } = resData;
  
    return (
      <div className="res-card" style={{background: "#f0f0f0"}}>
        <img
          className="res-logo"
          alt="rice bowl"
          src={REST_IMG_URL}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}</h5>
        <h5>{mindeliveryTime}</h5>
      </div>
    );
  };

  export default RestaurantCart;