import React from "react";
import './ToDoEmptySearchResult.css'

function ToDoEmptySearchResult({searchValue}){
    return(
        <p className="text__empty-search-results">Sorry, We couldn't find any results to "{searchValue}" </p>
    )
}

export {ToDoEmptySearchResult}