import React from "react";

function useStorageListener (sincronize){
        const [storageChange, setStorageChange] =React.useState(false);

        window.addEventListener('storage',(change)=>{
            if(change.key==='TODOS_V1'){
                console.log('HUBO CAMBIOS EN TODOS_V1');
                setStorageChange(true);
            }
        })
        const toogleShow = () =>{
            setStorageChange(false);
            sincronize();
        }
        return(
            {
                show:storageChange,
                toggleShow:toogleShow
            }
        ) 
}

export {useStorageListener}