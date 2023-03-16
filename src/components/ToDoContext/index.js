import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider (props){
    const {
        item:todos,
        saveItem:saveToDos,
        loading,
        error
      }=useLocalStorage('TODOS_V1',[]);
      
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false)
      const completedToDos = todos.filter(todo => !!todo.completed).length;
      const totalToDos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({completed:false, text}); 
        saveToDos(newTodos);
      };
    

      const completeTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // no editar directamente estado futuros prooblemas con rerender. Se debe enviar los estados
        //todos[todoIndex].completed = true; 
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true; 
        saveToDos(newTodos);
      };
    
      const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1)
        saveToDos(newTodos);
      };
    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal, 
            setOpenModal,
        }}>
            {props.children}
        </ToDoContext.Provider>
    )

}

export {ToDoContext,ToDoProvider};