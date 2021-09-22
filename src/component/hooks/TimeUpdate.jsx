import React, { useState } from 'react';

const TimeUpdate = () => {
    let curTime = new Date().toLocaleTimeString('en-US');
    const [time, setTime] = useState(curTime);
    
    const GetTimeNow = () => {
        // console.log(curTime);
         curTime = new Date().toLocaleTimeString('en-US');
        setTime(curTime);
    }
    return (
        <>
            <h1>  {time} </h1>
            <button onClick = {GetTimeNow} >Get Time Now</button>
        </>
    );
}
export default TimeUpdate;