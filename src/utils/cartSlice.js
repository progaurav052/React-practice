import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",//name of slice
    initialState:{
        items:[]
    },
    reducers:{ // this is just key like an keyword to define action
        additem:(state,action)=>{  //with each action it is bound to kind of function on what should happen
            state.items.push(action.payload);
        },
        removeitem: (state, action) => {
            const itemIdToRemove = action.payload.id;
            const index = state.items.findIndex(item => item.id === itemIdToRemove);
            if (index !== -1) {
              state.items.splice(index, 1); // remove one item from the found index
            }
          },
          
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});

// we will export two thing from here 
// internally this cartSlice is transformed to something like this 

/*{
    
    actions:{
        additem,
        removeItem,
        clearcart,

    }
    reducer
}
*/   
// this reducer is nothing but an function which has switch statement of all these functions

export default cartSlice.reducer;

export const {additem,removeitem,clearCart}=cartSlice.actions; // here the named exports are exported individually 