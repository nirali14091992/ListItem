import React, { useState } from 'react';

const Exampleevent = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");
    const bgChange = () => {
        console.log("clicked");
        let newBg = '#34495e';
        let newName = "Ouch!!! 😱 ";
        setBg(newBg);
        setName(newName);
    }
    const dbBgChange = () => {
        console.log("Db Click");
        let newDbBg = "#8e44ad";
        setName("Ayyo__ 😠 ");
        setBg(newDbBg);
    }
    return (
        <>
            <div style={{ backgroundColor: bg}}>
                <button onClick={bgChange} onDoubleClick={dbBgChange} onMouseEnter={bgChange} onMouseLeave={dbBgChange}>
                    {name}
                </button>
            </div>
        </>
    );
}

export default Exampleevent;