import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import TodoHeader from './components/todo-header';
import TodoSearch from './components/todo-search';
const App = () => {
  return (
    <div className='todo'>
      <TodoHeader />
      <TodoSearch />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

