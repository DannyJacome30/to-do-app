import React from "react";
import './ToDoLoading.css'

function ToDoLoading(){
    return(
        <div className="item__loading">
            <span className="item__check__loading"></span>
            <p className="item__text__loading">Cargando...</p>
            <span className="item__delete__loading"></span>
        </div>  
    )
}

export {ToDoLoading}