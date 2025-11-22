import React from "react";
import { useState } from "react";
export default function Counter(){

    const [counts, setCounts] = useState(0);

    const Increment = () =>{
        setCounts((prev)=>prev+1);
    }

    const Decrement = () =>{
        setCounts((prev)=>prev-1);
    }

    const Reset = () =>{
        setCounts(0);
    }

    const Invert = () =>{
        setCounts((prev)=>-prev);
    }
    
    return(
        <>
        <div style={{display: "flex", flexDirection:"column", border: "5px solid white", height: "350px", width: "500px", borderRadius: "50px", padding:"50px"}}>
            <h1>Welcome to Counter App!</h1>
            <h2>Count: {counts}</h2>
            <div style={{marginTop: "10px"}}>
                <button style={{marginRight: "5px"}} onClick={Increment}>+</button>
                <button style={{marginRight: "5px"}} onClick={Decrement}>-</button>
                <button style={{marginRight: "5px"}} onClick={Reset}>CE</button>
                <button onClick={Invert}>+/-</button>
            </div>
        </div>
        </>
    )
}