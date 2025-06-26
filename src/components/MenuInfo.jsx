import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
const MenuInfo = () => {
  /*{ const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantRating, setRestaurantRating] = useState("");
  const [costForTwo, setCostForTwo] = useState("");}
  this will cause re-rendering for just assigning values , 
  do re render when you want to change on UI
  */
  const [resMenuInfo, setResMenuInfo] = useState(null);
  // on the click of card , that specific menu API is called
  useEffect(() => {
    fetchMenuData();
  }, []);
  const { resId } = useParams();
  const fetchMenuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.08950&lng=80.27390&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResMenuInfo(json);
  };
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
