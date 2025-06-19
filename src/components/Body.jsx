import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  // state variables , on change of state it re-renders the component
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList); //set initially to null

  return (
    <div className="body-container">
      <div className="search-bar">
        <button
          className="top-rated-restaurant"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant.info.avgRating >= 4.4;
              }
            );
            console.log(filteredRestaurants);
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => {
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
