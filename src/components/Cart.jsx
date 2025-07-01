import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch=useDispatch();
    const clickHandler=()=>{
        dispatch(clearCart())
    }
    
    
    return cartItems.length==0?(<h1 className="text-center m-4 p-4 font-bold">No Items Added to the Cart!!!</h1>):(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="bg-amber-400 rounded-lg my-5 p-3" onClick={clickHandler}>Clear cart</button>
            {cartItems.map((item,index) => {

                return (
                    <div key={index} className="w-6/12 m-auto">
                        <Itemlist  iteminfo={item} />
                    </div>);
            })}
        </div>
    );
    
}
export default Cart;