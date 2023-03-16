import React from "react"
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";
import './ToDoItem.css';

function ToDoItem (props){
   /* <span 
                onClick={props.onComplete} 
                className={`item__check ${props.completed && 'item__check__checked'}`} 
                >
                √
            </span>
             <span onClick={props.onDelete} className="item__delete">
             X
         </span>*/
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