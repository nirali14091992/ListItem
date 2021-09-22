import React, { useState } from 'react';


const Examplestate = () => {
    // const state = useState();
    // console.log(state);
    const [count, setCount] = useState(0);
  
    const IncNum = () => {
        // setCount(100);
        setCount(count + 10);
        // console.log("Clicked " + count++);
    }
    const DecNum = () => {
        setCount(count- 1);
        // console.log("Clicked " + count++);
    }
    return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> Increment by 10 </button>
            <button onClick={DecNum}> Decrement by 1 </button>
        </>
    );
}

export default Examplestate;