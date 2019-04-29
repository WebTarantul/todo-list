import React, { Component } from 'react';
import './add-item.css'

export default class AddItem extends Component {
  state = {
    label: ''
  }

  onLabelChange = (e) =>{
    this.setState({
      label: e.target.value
    })
  }
  onSubmit= (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    })
  }
  render() {
    return (
      <form className="add-item d-flex" onSubmit={this.onSubmit}>
        <input className='form-control' 
                type="text" 
                name="new-item" 
                id="add-item-input" 
                onChange={this.onLabelChange}
                placeholder='What need to be done'
                value={this.state.label}/>
        <button className="add-item__btn item__btn btn btn-outline-secondary" >
          Add Todo item
        </button>
      </form>
    )
  }
}