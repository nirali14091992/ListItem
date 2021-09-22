import React from 'react';

const Matching = (props) =>{
    // let {x,y,z} = props;
    return (
        <>
            <div className="slot__inner">
                <h1>
                    {props.x} {props.y} {props.z}
                </h1>
                <h1>This is Matching....</h1>
                <hr />
            </div>
        </>
    );
}
export default Matching;