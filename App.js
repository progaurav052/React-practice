import React from "react";
import ReactDOM from "react-dom/client";

/*
*Header
 -Logo
 -About
 -home
 -cart
*Body
 -Search
 -restaurant Container
  -restaurant cards
    -restaurant name , ETA , cuisine
*Footer
 -copyright
 -Links
 -Address etc.   



*/

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home 🏠</li>
          <li>About ℹ</li>
          <li>Contact-us 📞</li>
          <li>Cart 🛒</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {resName,cuisine,rating,ETA}=props;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="restaurant-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dc9229db34f4ef91a2dcde816d16faa3"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{ETA}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resName="Meghana Foods" cuisine="Biryani,North indian,Asian" rating="4.8" ETA="38mins"/>
        <RestaurantCard resName="KFC" cuisine="Burger,Soft-drinks,Fastfood" rating="4.4" ETA="15-20mins"/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
