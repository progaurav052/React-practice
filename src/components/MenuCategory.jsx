import { useState } from "react";
import Itemlist from "./Itemlist";
const MenuCategory = (props) => {

   /* {
        data:{

        }
        showItems:
        setShowIndex:
        index:
    }
        */
    const { itemCards, title } = props.data;
    const {showItems,setShowIndex,index}=props;

    const clickHandler=()=>{
        setShowIndex(index);
    }
    
    return (
        <div>
            <div className="w-6/12 mx-auto my-4  shadow-lg p-4 bg-gray-100 cursor-pointer" onClick={clickHandler}>
                <div className="flex justify-between">
                    <span className="font-bold text-lg">{title} ({itemCards.length}) </span>
                    <span>🔽</span>
                </div>
                {showItems && itemCards.map((item) => {
                    return (
                        <div key={item.card.info.id}>
                            <Itemlist  iteminfo={item.card.info} />
                        </div>
                    );

                })}
            </div>
        </div>

    );
}
export default MenuCategory;