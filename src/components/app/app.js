import React, { Component } from 'react';

import TodoHeader from '../todo-header';
import TodoSearch from '../todo-search';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
        this.createItem('Drink coffee'),
        this.createItem('Build React APP'),
        this.createItem('Drink water'),
        this.createItem('Make awesome APP')
    ]
  }

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  deleteItem = (id) => {
    console.log(this.maxId);
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      let newData = [...todoData.slice(0,idx),...todoData.slice(idx + 1)];
      return {
        todoData: newData
      }
    });
  };

  
  addItem = (text) => {
    let item = this.createItem(text);
    this.setState(({todoData}) => {
      const newState = [...todoData,item]
      return {
        todoData: newState
      }
    } )
    
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData,id,'done')
      }
    });
  }
 
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData,id,'important')
      }
    })
  }
  
  toggleProperty(arr,id,propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem,[propName]: !oldItem[propName] };
    return [...arr.slice(0,idx), newItem, ...arr.slice(idx + 1)];
  }


  render() {
    const {todoData} = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;


    return (
      <div className='todo'>
        <TodoHeader 
          toDo={todoCount} 
          done={doneCount} />
        <TodoSearch/>
        <ItemStatusFilter/>
        <TodoList
          todos = { todoData }
          onDeleted = { this.deleteItem }
          onToggleImportant = { this.onToggleImportant }
          onToggleDone = {this.onToggleDone}
        />
        <AddItem 
          onAddItem={this.addItem}/>
      </div>
    )
  }
}

