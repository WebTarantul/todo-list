import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import TodoHeader from './components/todo-header';
import TodoSearch from './components/todo-search';
const App = () => {
  const todoData = [
    {label:'Drink coffee',important : false, id: 1},
    {label:'Build React APP', important : true, id: 2},
    {label:'Drink water',important : false, id: 3},
    {label:'Make awesome APP', important : true, id: 4}
  ]
  return (
    <div className='todo'>
      <TodoHeader />
      <TodoSearch />
      <TodoList todos={todoData} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

