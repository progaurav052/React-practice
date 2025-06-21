import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";

const Body = () => {
  // state variables , on change of state it re-renders the component
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList); //set initially to null
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);
  const [searchBoxText, setSearchBoxText] = useState("");
  useEffect(() => {
    console.log("executed useEffect");
  }, []);
 
   return listOfRestaurants.length===0? <ShimmerUI/>:(
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchBoxText}
            onChange={(e) => {
              setSearchBoxText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchBoxText.trim().toLowerCase());
                }
              );
              console.log(filteredRestaurant);
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-restaurant"
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
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantObj={restaurant}
            ></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
