import React, { useState } from 'react';

const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const Updatetime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(Updatetime, 1000);
    return (
        <>
            <h1 className="heading__style"> {ctime} </h1>
        </>
    );
}

export default DigitalClock;