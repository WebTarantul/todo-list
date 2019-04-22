import React from 'react';
import TodoListItem from './todo-list-item'
const TodoList = () => {

  return (
    <React.Fragment>
      <ul className="todo__list">
        <li className="todo__item"><TodoListItem label='Drink coffee'/></li>
        <li className="todo__item" ><TodoListItem label='Build React APP' important/></li>
      </ul>
    </React.Fragment>
  )
}

export default TodoList;