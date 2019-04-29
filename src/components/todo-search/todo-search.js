import React,{Component} from 'react';
import './todo-search.css';
export default class SearchPanel extends Component{
  state = {
    term: ''
  }

  onSearchChange = (value) => {
    this.setState({term: value})
    this.props.onSearchChange(value)
  }

  render(){
    const searchText = 'Type here to search';
    const searchStyles = {
      fontSize: '16px'
    }
    return <input style={searchStyles} 
                  className='todo__search' 
                  type='text' 
                  name='search' 
                  id='search' 
                  placeholder={searchText}
                  value={this.state.term}
                  onChange={(evt) => this.onSearchChange(evt.target.value)  } />
  }
}
