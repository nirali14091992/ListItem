import React from 'react';
import Matching from './MatchingSlot';
import NotMatching from './NotMatchingSlot';
import Slotgame from './Slotgame';

const SlotM  = (props) => {
    // let x = "😄";
    // let y = "😄";
    // let z = "🥪 ";

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
    let {x,y,z} = props; //object destructuring

    if((x===y) && (y===z)){
        return <Matching x= {props.x} y= {props.y} z= {props.z} />
    }else{
        return <NotMatching x= {props.x} y= {props.y} z= {props.z}/>
    }
}

export default SlotM;