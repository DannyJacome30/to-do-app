import React from "react";
import './ToDoList.css';


function ToDoList(props){
    return(
        <section className="list__container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalToDos) && props.onEmpty()}
            {(!!props.totalToDos && !props.searchedTodos.length) && props.onEmptySearchResults()}
            <ul className="list-items">
                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    );
}

export {ToDoList};