import React from "react";
import './ToDoList.css';


function ToDoList(props){
    return(
        <section className="list__container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length) && props.onEmpty}
            
            <ul className="list-items">
                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    );
}

export {ToDoList};