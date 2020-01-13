import React, {Component} from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

export default class TodoList extends Component {
  render () {
    const {todos,onItemDone,onItemImportant,onItemDelete} = this.props;

    const items = todos.map((el) => {
      const {id,...propsItem} = el;
      return <TodoListItem itemData={propsItem} 
                           key={id} 
                           onItemDone={() => onItemDone(id)}
                           onItemImportant={() => onItemImportant(id)}
                           onItemDelete={() => onItemDelete(id)} />
    });
    return (
      <ul className="todo-list list-group">
        {items}
      </ul>
    )
  }
}