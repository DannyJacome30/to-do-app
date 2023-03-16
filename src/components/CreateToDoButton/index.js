import React from "react"
import './CreateToDoButton.css';

function CreateToDoButton (props){

    const onClickButton = (msg) =>{
        props.setOpenModal(preState => !preState);
    }

    return(
        <button 
            className="btn__primary btn__add"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export {CreateToDoButton}