import React from 'react';
// import './component/Challenge.css';
function Compoeg(){
    let currDate = new Date(2020, 4, 4, 2);
    currDate = currDate.getHours();
    let greeting = '';
    const cssStyle = {};
    if(currDate >= 1 && currDate < 12){
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    }else if(currDate >= 12 && currDate < 19){
        greeting = 'Good Noon';
        cssStyle.color = 'orange';
    }else{
        greeting = 'Good Night';
        cssStyle.color = 'black';
    }

    return (
            <div>
                <h1>Hello Mam, <span style={cssStyle}> {greeting}</span></h1>
            </div>
    );
}


export default Compoeg;