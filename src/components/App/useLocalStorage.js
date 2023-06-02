
import React, {useEffect} from 'react';

function useLocalStorage(itemName,initialValue){
    const [sincronizedItem,setsincronizedItem] = React.useState(true);
    const [error,setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);
    const [item, setItem]= React.useState(initialValue);
  
    //simula el uso de un api para poder tener loading error
    useEffect(()=>{
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
          setsincronizedItem(true);
        } catch (error) {
          setError(error);
        }
        
      },2000);
    },[sincronizedItem])
  
    const saveItem = (newToDo) => {
      try {
        const stringifiesTodo = JSON.stringify(newToDo);
        localStorage.setItem(itemName,stringifiesTodo);
        setItem(newToDo);
      } catch (error) {
        setError(error);
      }
     
    }
    
    const sincronizeItem = () =>{
      setLoading(true);
      setsincronizedItem(false);
    }

    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem
    }
  }

  export {useLocalStorage}