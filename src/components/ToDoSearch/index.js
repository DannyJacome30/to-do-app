import React from "react"
import { ToDoContext } from "../ToDoContext";
import './ToDoSearch.css';

function ToDoSearch({searchValue,setSearchValue}){

    const onSearch = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <div className="search">
            <input onChange={onSearch} value={searchValue} className="search__input" placeholder='task'/>
        </div>
        
    )
}

export {ToDoSearch}