import { useState } from "react";

const User=(props)=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(2);
    const {name,Location,email}=props;
    return(
        <div className="user-card">
            <button  onClick={()=>{setCount(count+1)}}>Count: {count}</button>
            <button onClick={()=>{setCount2(count2+2)}}>Count2: {count2}</button>
            <h2>Name :{name}</h2>
            <h4>Location :{Location}</h4>
            <h4>email:{email}</h4>
        </div>
    );
}
export default User;