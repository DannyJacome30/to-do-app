import React from "react"

function ToDoHeader({ children, loading }) {
    return (
      <header>
        {
          React.Children 
            .toArray(children) //un array porq son dos componentes lo que recibe ToDoCounter y ToDoSearch
            .map(child => React.cloneElement(child, { loading })) //itera cada componente hace clon y envia el  loading
        }
      </header>
    );
  }

export {ToDoHeader}