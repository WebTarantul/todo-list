import React from 'react';
import './todo-list-item.css'

export default class ListItem extends React.Component {

    state = {
      done: false,
      important: false
    }
    onImportantBtnClick = () => {
      this.setState(({important}) => {
        return {
          important: !important
        }
      })
    }
    onTextClick = () => {
      this.setState(({done}) => {
        return {done: !done}
      })
    }

  render() {
    const {done,important} = this.state;
    const {label,onDeleted} = this.props;
    let classNames = 'todo-item'
    if (done) {
      classNames += ' done'
    }
    if (important) {
      classNames += ' important'
    }
    return (
  
      <span className={classNames}>
        <span className="todo-item__text" onClick={this.onTextClick}>
          {label}
        </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onImportantBtnClick}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted} >
          <i className="far fa-trash-alt" />
        </button>
      </span>
      );
  }
}

