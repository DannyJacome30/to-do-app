import React from "react";
import { ReactComponent as CheckSVG } from '../../assets/check.svg';
import { ReactComponent as DeleteSVG } from '../../assets/close.svg';
import './ToDoIcon.css'
function ToDoIcon({type,color,onClick}){

    const iconTypes = {
        "check": color => (
          <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
        ),
        "delete": color => (
          <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
        ),
      };
      
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {ToDoIcon}