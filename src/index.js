import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Learn React', 'Build Awesome App']

  return (
    <React.Fragment>
      <ul className="todo__list">
        <li className="todo__item">{items[0]}</li>
        <li className="todo__item">{items[1]}</li>
      </ul>
    </React.Fragment>
  )
}

const AppHeader = () => {
  return <h1 className='todo__title'>My TODO list</h1>;
}

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyles = {
    fontSize: '16px'
  }
  return <input style={searchStyles} className='todo__search' type='text' name='search' id='search' placeholder={searchText} />
}

const App = () => {
  return (
    <div className='todo'>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

