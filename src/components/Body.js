import RestaurantCart from "./RestaurantCart";
import resObj from "../utils/mockData";

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

  export default Body;