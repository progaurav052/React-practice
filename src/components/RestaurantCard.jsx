import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantObj } = props;
  const { name, cuisines, avgRating, costForTwo} =
    restaurantObj.info;
  const {deliveryTime}=restaurantObj.info.sla;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="restaurant-logo"
        src={CDN_URL + restaurantObj.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{deliveryTime}mins</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
