import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {

  const [logStatus,setLogStatus]=useState("LogIn")
  const OnlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(userContext);

  const cartItems = useSelector((store)=>{
    return store.cart.items});// subcribing to cart items
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 rounded-lg">
      <div className="w-24">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">

          <li className="px-3">Online Status:{OnlineStatus?"✅" :"🔴"}</li>
          <li className="px-3"><Link to="/grocery">Grocery</Link></li>
          <li className="px-3"> <Link to="/">Home 🏠</Link></li>
          <li className="px-3"> <Link to="/about">About ℹ</Link></li>
          <li className="px-3"><Link to="/contact">Contact-us 📞</Link></li>
          <li className="px-3">Cart ({cartItems.length})</li>
          <button className="login" onClick={()=>{
            setLogStatus(logStatus==="Login"?"LogOut":"Login")}}>{logStatus}</button>
           <li className="px-3">{loggedInUser}</li> 
        </ul>
      </div>
    </div>
  );
};

export default Header;
