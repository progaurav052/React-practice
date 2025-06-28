import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantObj } = props;
  const { name, cuisines, avgRating, costForTwo} =
    restaurantObj.info;
  const {deliveryTime}=restaurantObj.info.sla;
  return (
    <div className="m-4 p-3 w-[260px] rounded-lg bg-gray-200 shadow-sm hover:shadow-2xl" >
      <img
        alt="res-logo"
        className="rounded-lg h-[180px] object-cover w-full"
        src={CDN_URL + restaurantObj.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="">{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐️</h4>
      <h4> 🕒 {deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
