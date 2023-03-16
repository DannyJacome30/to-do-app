import React from 'react';
import {ToDoCounter} from '../ToDoCounter/index.js';
import {ToDoSearch} from '../ToDoSearch/index.js';
import {CreateToDoButton} from '../CreateToDoButton/index.js';
import {ToDoList} from '../ToDoList/index.js';
import {ToDoItem} from '../ToDoItem/index.js';
import { ToDoContext } from '../ToDoContext/index.js';
import { Modal } from '../Modal/index.js';
import { ToDoForm } from '../ToDoForm/index.js';
import { ToDoError } from '../ToDoError/index.js';
import { ToDoLoading } from '../ToDoLoading/index.js';
import { ToDoEmpty } from '../ToDoEmpty/index.js';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal} = React.useContext(ToDoContext);
return(
    <React.Fragment>
      <ToDoCounter/>      
      <ToDoSearch/> 
      <ToDoList>
        {error && <ToDoError/>} 
        {loading && <ToDoLoading/>}
        {(!loading && !searchedTodos.length) && <ToDoEmpty/>}
        {searchedTodos.map(
          todo => ( 
            <ToDoItem 
              key={todo.text}
              text={todo.text} 
              completed={todo.completed} 
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          ))}
        </ToDoList> 
        {!!openModal && (
        <Modal>
          <ToDoForm/>
          </Modal>
        )}
      <CreateToDoButton setOpenModal={setOpenModal}/>
    </React.Fragment> 
);
}

export {AppUI};