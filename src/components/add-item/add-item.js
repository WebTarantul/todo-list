import React, { Component } from 'react';
import './add-item.css'

export default class AddItem extends Component {

  render() {
    return (
      <div className="add-item">
        <button className="add-item__btn item__btn btn btn-outline-secondary"
          onClick={
            () => this.props.onAddItem('hello world!')
          }>
          Add Todo item
        </button>
      </div>
    )
  }
}