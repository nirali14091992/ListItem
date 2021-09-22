import React from 'react';
import { useState } from 'react/cjs/react.development';

const Forms = () => {
    const [myname, setName] = useState();
    const [lastname, setLastName] = useState();
    // const [password, setPassword] = useState();
    const [fullName, setfullName] = useState();
    const [newLastName, setNewLastName] = useState();

    const inputEvent = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);
        // setPassword(event.target.value);
    }
    const inputLastName = (event) => {
        // console.log(event.target.value);
        // setName(event.target.value);
        setLastName(event.target.value);
    }
    const onSubmits = (event) => {
        event.preventDefault();
        setfullName(myname);
        setNewLastName(lastname);
    }

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1 className="formheading__style"> Hello {fullName} { newLastName}</h1>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={inputEvent}
                            value={myname}
                        />
                        <input
                            type="text"
                            placeholder="Enter Your Last Name"
                            onChange={inputLastName}
                            value={lastname}
                        />
                        <button type="submit" className="forms_button">
                            Click Me 👍
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Forms;