import React from "react";
import './ToDoSearch.css';

function ToDoSearch({searchValue,setSearchValue,loading}){

    const onSearch = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <div className="search">
            <input 
                onChange={onSearch} 
                value={searchValue} 
                className="search__input" 
                placeholder='task'
                disabled={loading}
            />
        </div>
        
    )
}

export {ToDoSearch}