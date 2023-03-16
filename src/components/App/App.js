import React from 'react';
import {ToDoCounter} from '../ToDoCounter/index.js';
import {ToDoSearch} from '../ToDoSearch/index.js';
import {CreateToDoButton} from '../CreateToDoButton/index.js';
import {ToDoList} from '../ToDoList/index.js';
import {ToDoItem} from '../ToDoItem/index.js';
import { useToDo } from './useToDo.js';
import { Modal } from '../Modal/index.js';
import { ToDoForm } from '../ToDoForm/index.js';
import { ToDoError } from '../ToDoError/index.js';
import { ToDoLoading } from '../ToDoLoading/index.js';
import { ToDoEmpty } from '../ToDoEmpty/index.js';
import { ToDoHeader } from '../ToDoHeader/index.js';


function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal,
    totalToDos, 
    completedToDos,
    searchValue,
    setSearchValue,
    addTodo,} = useToDo();


  return(
    <React.Fragment>
      <ToDoHeader>
        <ToDoCounter
          totalToDos={totalToDos}
          completedToDos={completedToDos} />      
        <ToDoSearch
          searchValue ={searchValue}
          setSearchValue ={setSearchValue} /> 
      </ToDoHeader>
      <ToDoList
        error={error}
        loading = {loading}
        searchedTodos={searchedTodos}
        onError = {()=><ToDoError/>}
        onLoading = {()=><ToDoLoading/>}
        onEmpty = {()=><ToDoEmpty/>}
        render = {todo => ( 
          <ToDoItem 
            key={todo.text}
            text={todo.text} 
            completed={todo.completed} 
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
          />
        )}
      />
      
        {!!openModal && (
        <Modal>
          <ToDoForm
            addTodo ={addTodo}
            setOpenModal={setOpenModal}
          />
          </Modal>
        )}
      <CreateToDoButton setOpenModal={setOpenModal}/>
    </React.Fragment> 
);
}

export default App;
