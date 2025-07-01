import { Link } from "react-router-dom";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect, useContext } from "react";
import { RES_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Body = () => {
  // state variables , on change of state it re-renders the component
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //set initially to null
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBoxText, setSearchBoxText] = useState("");
  const OnlineStatus = useOnlineStatus();
  const {loggedInUser,setUserName}=useContext(userContext);

  const RestaurantWithOffer = withDiscountLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL); // super power given by browser
    const json = await data.json(); //convert to json
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  



  if (OnlineStatus == false) {
    return <h2>!!Looks like there is No interent , Please check your connection</h2>
  }

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
      <div className="filter-section flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchBoxText}
            onChange={(e) => {
              setSearchBoxText(e.target.value);
            }}
          />
          <button className="bg-green-100 m-4 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchBoxText.trim().toLowerCase());
                }
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
          <input className="border border-solid border-black" type="text" value={loggedInUser} onChange={(event)=>{setUserName(event.target.value)}}/>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="top-rated-restaurant px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const topRatedRestaurants = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.avgRating >= 4.4;
                }
              );
              setFilteredRestaurants(topRatedRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        

      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >{restaurant.info.aggregatedDiscountInfoV3 ? <RestaurantWithOffer restaurantObj={restaurant} /> : <RestaurantCard restaurantObj={restaurant} />}

            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
