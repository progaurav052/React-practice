import RestaurantCard from "./RestaurantCard";
import cards from "../utils/mockData";

const Body = () => {
    return (
      <div className="body-container">
        <div className="search-bar">Search</div>
        <div className="restaurant-container">
          {cards.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.info.id}
                resObj={restaurant}
              ></RestaurantCard>
            );
          })}
        </div>
      </div>
    );
  };


 export default Body; 