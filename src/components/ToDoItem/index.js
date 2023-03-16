import React from "react"
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";
import './ToDoItem.css';

function ToDoItem (props){

    return (
        <li className="item">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
                >

            </CompleteIcon>
            <p 
                className={`item__text ${props.completed && 'item__text__done'}`}>
                {props.text}
            </p>
           <DeleteIcon
            onDelete={props.onDelete}
           >

           </DeleteIcon>
        </li>
    )
}

export {ToDoItem};