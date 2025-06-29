import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useResMenu from "../utils/useResMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import MenuCategory from "./MenuCategory";
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

  const { name, avgRating, costForTwoMessage,cuisines } =
    resMenuInfo?.data?.cards[2]?.card?.card?.info;

  const foodCategories = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => {
    return (category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  });
  

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">Rating - {avgRating}</h2>
      <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
      {foodCategories.map((category)=>{
        return(<MenuCategory key={category.card.card.categoryId}data={category.card.card} />);
      })}
    </div>
  );
};
export default MenuInfo;
