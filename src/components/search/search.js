import React, {Component} from 'react';
import './search.css'

export default class Search extends Component {
  onSearch = (e) => {
    e.preventDefault();
    this.props.onSearch(e.target.value);

  }
  render () {
    return (
        <input className='search' 
               type="text" 
               name="search" 
               id="search"
               placeholder='Type here to search'
               onChange={(e) => this.onSearch(e)} />
    )
  }
}