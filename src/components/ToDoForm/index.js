import React from "react";
import './ToDoForm.css'

function ToDoForm ({
    addTodo,
    setOpenModal,
}){
    const [newToDoValue,setNewToDoValue] =React.useState('');

    const onCancel= ()=>{
        setOpenModal(false);
    }

    const onChange  = (event)=>{
        setNewToDoValue(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        setOpenModal(false);
        addTodo(newToDoValue);
        
    }
    return(
        <form onSubmit={onSubmit} className="form__add-To-Do">
            <label className="form__title">To Do</label>
            <textarea className="form__input" 
                value={newToDoValue}
                onChange={onChange} 
                placeholder="Añadir tarea"></textarea>
            <div className="form__btns">
                <button className="btn__secondary" type="submit">Añadir</button>
                <button className="btn__secondary" onClick={onCancel} type="button">Cancelar</button>
            </div>
        </form>

    )
}

export {ToDoForm}