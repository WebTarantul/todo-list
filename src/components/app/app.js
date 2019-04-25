import React, { Component } from 'react';

import TodoHeader from '../todo-header';
import TodoSearch from '../todo-search';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

export default class App extends Component {
  state = {
    todoData: [{
        label: 'Drink coffee',
        important: false,
        id: 1
      },
      {
        label: 'Build React APP',
        important: true,
        id: 2
      },
      {
        label: 'Drink water',
        important: false,
        id: 3
      },
      {
        label: 'Make awesome APP',
        important: true,
        id: 4
      }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      let newData = [...todoData.slice(0,idx),...todoData.slice(idx + 1)];
      return {
        todoData: newData
      }
    });
  };
  maxId = 100;
  addItem = (text) => {
    let item = {
      label: text,
      important: false,
      id: this.maxId++ 
    }
    this.setState(({todoData}) => {
      const newState = [...todoData,item]
      return {
        todoData: newState
      }
    } )
    
  }

  render() {
    return (
      <div className='todo'>
        <TodoHeader toDo={1} done={4} />
        <TodoSearch/>
        <ItemStatusFilter/>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <AddItem onAddItem={this.addItem}/>
      </div>
    )
  }
}

