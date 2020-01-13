import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {
  state = {
    label: ''
  }

  onChangeValue = (e) => {
    this.setState( {
      label: e.target.value
    });
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label)
    this.setState({label: ''});
  }

  render(){
    return (
      <form className="add-item d-flex"
            onSubmit={(e) => this.onSubmitForm(e)} >
      <input className='add-item__input' 
             type="text" 
             placeholder='What need to be done'
             value={this.state.label}
             onChange={(e) => this.onChangeValue(e)} />
      <button className="add-item__btn btn btn-info">Add Todo Item</button>
      </form>
    )
  }
}
