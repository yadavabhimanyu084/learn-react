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

  export default RestaurantCart;