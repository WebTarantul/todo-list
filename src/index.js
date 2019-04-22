import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import TodoHeader from './components/todo-header';
import TodoSearch from './components/todo-search';
import ItemStatusFilter from './components/item-status-filter';
const App = () => {
  const todoData = [
    {label:'Drink coffee',important : false, id: 1},
    {label:'Build React APP', important : true, id: 2},
    {label:'Drink water',important : false, id: 3},
    {label:'Make awesome APP', important : true, id: 4}
  ]
  return (
    <div className='todo'>
      <TodoHeader toDo={1} done={4} />
      <TodoSearch/>
      <ItemStatusFilter/>
      <TodoList todos={todoData} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

