import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {
const elements = todos.map((item) => {

  const {id,...itemProps} = item;
  return (
    <li className="todo__item" key={id}>
    <TodoListItem {...itemProps}/>
    </li>
  )
});
  return (
    <React.Fragment>
      <ul className="todo__list">
       {elements}
      </ul>
    </React.Fragment>
  )
}

export default TodoList;