// Incrementing and Decrementing the State Variable on Button clicked
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Add, Delete, Remove } from '@material-ui/icons';
import { Button, Tooltip } from '@material-ui/core';

const Challenge3 = () => {
    const [count, setCount] = useState(0);
    const IncNum = () => {
        // let newCount = count + 1;
        // console.log(newCount);
        setCount(count + 1);
    }
    const DecNum = () => {

        setCount((count) => {
            if (count === 0) {
                alert("Sorry , Zero limit reach...");
                setCount(0);
            } else {
                setCount(count - 1);
            }
            
        });
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {count} </h1>
                    <Tooltip title="Add">
                        <Button onClick={IncNum} className="btn_green">
                            <Add />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button onClick={DecNum} className="btn_red">
                            <Delete />
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </>
    );
}
export default Challenge3;