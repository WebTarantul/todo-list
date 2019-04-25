import React from 'react';
import './todo-header.css'

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="todo__header">
      <h1 className='todo__title'>My TODO list</h1>
      <h5 className="todo__stat">{toDo} more to do, {done} done </h5>
    </div>
  )

}

export default AppHeader;