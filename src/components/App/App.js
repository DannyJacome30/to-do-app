import React from 'react';
import { AppUI } from './AppUI';
import { ToDoProvider } from '../ToDoContext';


/*const todosDefault = [
  {text: 'Acabar curso', completed: true},
  {text: 'Programar portfolio', completed: false},
  {text: 'Acabar proyectos', completed: false}
]*/



function App() {
 

  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;
