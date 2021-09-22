import React from 'react';

const NotMatching = (props) =>{
    let {x,y,z} = props;
    return (
        <>
            <div className="slot__inner">
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is not Matching....</h1>
                <hr />
            </div>
        </>
    );
}
export default NotMatching;