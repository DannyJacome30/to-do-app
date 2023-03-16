import React from "react";
import { ToDoIcon } from './index.js';

function CompleteIcon({ completed, onComplete }) {
    return (
      <ToDoIcon
        type="check"
        color={completed ? '#4caf50' : 'gray'}
        onClick={onComplete}
      />
    );
}
export {CompleteIcon}