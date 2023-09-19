import React from "react";
import logo from "../../assets/Logo_DJ_2.svg";
import './ToDoCounter.css';

function ToDoCounter ({totalToDos,completedToDos,loading}){
    return(
        <div 
            className='title'

        >
            <a href="https://dannyjacome30.github.io/DannyJacome/" target="_blank"><img className="counter__img" alt="logo" src={logo} h/></a>
            <h2 className="counter__title-primary">TO DO</h2>
            <h3
                 className={`counter__subtitle ${!!loading && "counter__subtitle--loading"}`}
            >
                complete {completedToDos} to {totalToDos} tasks
            </h3>
        </div>
        
    )
}

export{ToDoCounter};