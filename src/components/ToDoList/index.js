import React from "react";
import './ToDoList.css';


function ToDoList(props){
    return(
        <section>
            <ul className="list-items">{props.children}</ul>
        </section>
    );
}

export {ToDoList};