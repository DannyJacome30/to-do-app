import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({sincronize}){
    const {show,toggleShow}= useStorageListener(sincronize);
    if(show){
        return(
            <div className="cambios__container__background">
                <div className="cambios__container">
                 <p className="cambios__text">It looks like there was a change in another browser tab or window.<br/>Do you want to synchronize? </p>
                 <button
                    className="button__cambios"
                    onClick={()=>toggleShow(false)}
                 >Syncronize</button>
            </div>
            </div>
            
        )        
    }else{
        return null;
    }
    
}

export {ChangeAlert}