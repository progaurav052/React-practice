import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";

const Body = () => {
  // state variables , on change of state it re-renders the component
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //set initially to null
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBoxText, setSearchBoxText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); // super power given by browser
    const json = await data.json(); //convert to json
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
      <div className="filter-section">
        <div className="searchAndTopRated">
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
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
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
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            
              <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                <RestaurantCard restaurantObj={restaurant} />
              </Link>
             
          );
        })}
      </div>
    </div>
  );
};

export default Body;
