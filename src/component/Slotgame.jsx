import React from 'react';
import SlotM  from './SlotMach';
import './Card.css';

const Slotgame = () => {
    return (
        <>
            <h1 className="heading__style"> 
                🎰 Welcome to <span style= {{fontWeight : 'Bold'}}>Slot Machine Game</span> 🎰 
            </h1>
            <div className="slotmachine">
                <SlotM x= '😄' y= '😄' z= '😄' />
                <SlotM x= '😄' y= '😆' z= '😠'  />
                <SlotM x= " ❤️ " y= " ❤️ " z= '😠'  />
            </div>
        </>
    );
}
export default Slotgame;