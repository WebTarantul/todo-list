import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({itemData:{label,done,important},onItemDone,onItemImportant,onItemDelete}) => {
  let classes = 'todo-list__item list-group-item'
  if (done) {
    classes += ' done'
  }
  if(important) {
    classes += ' important'
  }
  return (
    <li className={classes} >
      <span className='todo-list__label'
            onClick={() => onItemDone()}>
            {label}
      </span>
      <button className="todo-list__important btn btn-warning" onClick={() => onItemImportant()}><i className="fa fa-exclamation" /></button>
      <button className="todo-list__delete btn btn-danger" onClick={() => onItemDelete()}><i className="far fa-trash-alt" /></button>
    </li>
  )
}

export default TodoListItem;