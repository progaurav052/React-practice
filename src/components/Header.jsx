import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {

  const [logStatus,setLogStatus]=useState("LogIn")
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home 🏠</li>
          <li>About ℹ</li>
          <li>Contact-us 📞</li>
          <li>Cart 🛒</li>
          <button className="login" onClick={()=>{
            setLogStatus(logStatus==="Login"?"LogOut":"Login")}}>{logStatus}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
