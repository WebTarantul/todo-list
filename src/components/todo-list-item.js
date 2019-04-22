import React from 'react';
import './styles/todo-list-item.css'

const ListItem = ({label, important=false}) => {
  const itemStyle = {
    color: important ? 'tomato' : 'black'
  }
  return (

    <span class="todo-item">
      <span className="todo-item__text" style={itemStyle}>
        {label}
      </span>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="far fa-trash-alt" />
      </button>
    </span>
    )
  }
export default ListItem;

