import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

const ItemList = (props) => {
    return (
        <>
            <div className="todo_style">
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="fa fa-times"
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                />
                <li> {props.text} </li>
            </div>
        </>
    );
}
export default ItemList;