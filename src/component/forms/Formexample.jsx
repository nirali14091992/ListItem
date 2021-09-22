import React from 'react';
import { useState } from 'react/cjs/react.development';

const FormExample = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qua:  ""
    });

    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);
        
        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;
        
        setFullName((preValue) => {
            console.log(preValue);

            return {
                ...preValue,
                [name] : value,
            }
            // if (name === 'fName') {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     }
            // }else if (name === 'lName') {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     }
            // }else if (name === 'email') {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone,
            //     }
            // } else if (name === 'Phone') {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value,
            //     }
            // }
        });
    }
    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form submitted");
    }

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1 className="formheading__style">
                            Hello {fullName.fname} {fullName.lname}
                        </h1>
                        <p>{fullName.email} </p>
                        <p> {fullName.phone}</p>
                        <p> {fullName.qua}</p>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="fname"
                            onChange={inputEvent}
                            value={fullName.fname}
                        />
                        <input
                            type="text"
                            placeholder="Enter Your Last Name"
                            name="lname"
                            onChange={inputEvent}
                            value={fullName.lname}
                        />
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            onChange={inputEvent}
                            value={fullName.email}
                        />
                        <input
                            type="number"
                            placeholder="Enter Your Number"
                            name="phone"
                            onChange={inputEvent}
                            value={fullName.phone}
                        />
                        <input
                            type="text"
                            placeholder="Enter Your Qualification"
                            name="qua"
                            onChange={inputEvent}
                            value={fullName.qua}
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
export default FormExample;