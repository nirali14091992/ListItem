import React from 'react';
import { useState } from 'react/cjs/react.development';
import ItemList from './ItemList';

const Todolist = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    
    const inputEvent = (event) => {
        console.log(event.target.value);
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        setItems((oldItems) => {
            // console.log(oldItems);
            return [...oldItems, inputList]
        });
        setInputList("");
    };
    const deleteItem = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrItem, index) => {
                return index !== id;
            })
        });
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="todolist_heading">To Do List</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add Items"
                        className="todolist_input"
                        onChange={inputEvent}
                        value={inputList}
                    />
                    <button onClick={listOfItems} className="todolist_button"> + </button>
                    <ol>
                        {/* <li> {inputList} </li> */}
                        {Items.map((itemval, index) => {
                            return <ItemList key={index} id={index} text= {itemval} onSelect={deleteItem} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
export default Todolist; 