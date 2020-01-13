import React, {Component} from 'react';
import './app.css'
import Header from '../header'
import ItemStatusFilter from '../item-status-filter';
import Search from '../search';
import TodoList from '../todo-list';
import AddItem from '../add-item';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData:[
      this.createItem('Drink coffee'),
      this.createItem('Build React APP'),
      this.createItem('Drink water'),
      this.createItem('Make awesome APP')
    ],
    term: '',
    filter: 'all'
    
  }
  
  createItem (label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  onItemDone = (id) => {
    this.setState(({todoData}) => {
     return {
       todoData: this.toggleProperty(todoData,'done',id)
     }
    });
  }

  onItemImportant = (id) => {
    this.setState(({todoData}) => {
     return {
       todoData: this.toggleProperty(todoData,'important',id)
     }
    });
  }

  onItemDelete = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
     return {
       todoData: [
         ...[...todoData].slice(0,idx),
         ...[...todoData].slice(idx+1)
        ]
     }
    });
  }
  
  toggleProperty(items,prop,id) {
    const idx = items.findIndex((el) => el.id === id);
    const newItem = [...items][idx];
    newItem[prop] = !items[idx][prop];
    const copyArr = [...items];
    const newArr = [
                    ...copyArr.slice(0, idx),
                    newItem,
                    ...copyArr.slice(idx + 1)
                  ]
    return newArr;
  }

  onAddItem = (label) => {
    
    const newItem = this.createItem(label);
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData,newItem]
      }
    });
  }

  onSearch  = (term) => {
    this.setState({term: term})
  }

  filter(items,filterText) {
      switch (filterText) {
        case 'all':
          return items;
        case 'active':
          return items.filter(el => !el.done);
        case 'done':
          return items.filter(el => el.done);

        default:
          return items;
      }
  }
  onFilterStatus = (filterStatus) => {
    this.setState({filter: filterStatus})
  }

  render () {
    const {todoData,term,filter} = this.state;
    const done = todoData.filter((el) => el.done).length;
    const active = todoData.filter((el) => !el.done).length;
    const visableItems = this.filter(todoData,filter)
                             .filter(el => el.label.toLowerCase()
                             .indexOf(term.toLowerCase()) > -1);
    return(
      <div className='todo__wrapper'>
        <Header done={done} active={active} />
        <div className="todo__nav-panel">
          <Search onSearch={this.onSearch} />
          <ItemStatusFilter filterStatus={filter} onFilterStatus={(filterStatus) => this.onFilterStatus(filterStatus)} />
        </div>
        <TodoList todos={visableItems} 
                  onItemDone={(id) => this.onItemDone(id)} 
                  onItemDelete={(id) => this.onItemDelete(id)} 
                  onItemImportant={(id) => this.onItemImportant(id)} />
        <AddItem onAddItem={(label) => this.onAddItem(label)} />        
      </div>
    )
  }
}
