import React from 'react';
import TodoListItem from './todo-list-item';
import './styles/todo-list.css';

const TodoList = ({todos}) => {
const elements = todos.map((item) => {

  const {id,...itemProps} = item;
  return (
    <li className="todo__item list-group-item" key={id}>
    <TodoListItem {...itemProps}/>
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