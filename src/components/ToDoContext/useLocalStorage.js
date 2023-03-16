import React from "react";

function useLocalStorage(itemName,initialValue){
    const [error,setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);
    const [item, setItem]= React.useState(initialValue);
  
    //simula el uso de un api para poder tener loading error
    React.useEffect(()=>{
      setTimeout (()=>{
        try {
          const localStorageToDos = localStorage.getItem(itemName);
          let parsedItem;
        
          if(!localStorageToDos){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem=JSON.parse(localStorageToDos);
          }
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
        
      },3000);
    })
  
    const saveItem = (newToDo) => {
      try {
        const stringifiesTodo = JSON.stringify(newToDo);
        localStorage.setItem(itemName,stringifiesTodo);
        setItem(newToDo);
      } catch (error) {
        setError(error);
      }
     
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    }
  }

  export {useLocalStorage}