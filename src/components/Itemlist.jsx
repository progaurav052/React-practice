import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";
import { useContext } from "react";
import { additem } from "../utils/cartSlice"; //action
const Itemlist = (props) => {

    const { name, price, description, imageId } = props.iteminfo;
    const {loggedInUser}=useContext(userContext);

    const dispatch=useDispatch();
    const clickHandler=()=>{
        dispatch(additem(props.iteminfo))
        // when you click ==> it dispatches the additem action which calls the reducer function of the store which will modify the store/slice
    }


    return (
        <div className="p-2 m-2 border-gray-300 border-b-2 flex justify-between">
            <div className=" w-9/12 text-left">
                <div className="py-2">
                    <span className="font-bold ">{name}-</span>
                    <span className="font-bold "> ₹{parseInt(price) / 100}</span>
                </div>

                <p className="text-sm">{description} -- {loggedInUser}</p>
            </div>
            <div className="w-3/12 mx-2 ">
                <div className="absolute bg-amber-100 rounded-lg align-bottom">
                    <button className="text-green-600 font-bold" onClick={clickHandler}>ADD +</button>
                </div>
                <img src={CDN_URL + imageId} alt="alt-text" className="w-full rounded-lg" />

            </div>


        </div>
    );
}
export default Itemlist;