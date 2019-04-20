import React from 'react';
import TodoListItem from './todo-list-item'
const TodoList = () => {

  return (
    <React.Fragment>
      <ul className="todo__list">
        <li className="todo__item"><TodoListItem/></li>
        <li className="todo__item"><TodoListItem/></li>
      </ul>
    </React.Fragment>
  )
}

export default TodoList;