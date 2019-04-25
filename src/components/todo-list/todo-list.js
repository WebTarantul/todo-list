import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todos,onDeleted}) => {
const elements = todos.map((item) => {

  const {id,...itemProps} = item;
  return (
    <li className="todo__item list-group-item" key={id}>
    <TodoListItem {...itemProps}
    onDeleted={() => onDeleted(id)}/>
    </li>
  )
});
  return (
    <React.Fragment>
      <ul className="todo__list list-group">
       {elements}
      </ul>
    </React.Fragment>
  )
}

export default TodoList;