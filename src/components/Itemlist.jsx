import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";
import { useContext } from "react";
const Itemlist = (props) => {

    const { name, price, description, imageId } = props.iteminfo;

    const {loggedInUser}=useContext(userContext);
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
                    <button className="text-green-600 font-bold ">ADD +</button>
                </div>
                <img src={CDN_URL + imageId} alt="alt-text" className="w-full rounded-lg" />

            </div>


        </div>
    );
}
export default Itemlist;