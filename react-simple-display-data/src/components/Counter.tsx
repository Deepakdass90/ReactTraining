import React, { useState } from "react";

function Counter() {

    const incDecVal = 20;
    const[counterVal , setCounterVal] = useState(0);

    const handleIncrement = (e:any) =>{
        setCounterVal(counterVal+incDecVal);
    }
    const handleDecrement = (e:any) =>{
        setCounterVal(counterVal-incDecVal);
    }

    return(
        <div>
            Counter
            <br/>
            <button name="button1" onClick={handleIncrement}> Increment </button>
            <div>{counterVal}</div>
            <button name="button2" onClick={handleDecrement}> Decrement </button>
        </div>
    )
}

export default Counter;
