import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useResMenu from "../utils/useResMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
const MenuInfo = () => {
  /*{ const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantRating, setRestaurantRating] = useState("");
  const [costForTwo, setCostForTwo] = useState("");}
  this will cause re-rendering for just assigning values , 
  do re render when you want to change on UI
  */
  const { resId } = useParams();
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus == false) {
    return (
      <h2>!!Looks like there is No interent , Please check your connection</h2>
    );
  }
  const resMenuInfo = useResMenu(resId); // hook ==> js function
  if (resMenuInfo === null) {
    return <ShimmerUI />;
  }
  const { itemCards } =
    resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  const { name, avgRating, costForTwoMessage } =
    resMenuInfo?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h2>Rating - {avgRating}</h2>
      <h3>Cost - {costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <p key={item.card.info.id}>
              {" "}
              {item.card.info.name} -{" "}
              {parseInt(item.card.info.price) / 100 ||
                parseInt(item.card.info.defaultPrice) / 100}{" "}
              Rs
            </p>
          );
        })}
      </ul>
    </div>
  );
};
export default MenuInfo;
