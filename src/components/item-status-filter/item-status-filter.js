import React from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
  onFilter = (e) => {
    this.props.onFilter(e.target.dataset.filter);
  }

  buttons = [
    {name: 'all' ,label: 'All'},
    {name: 'active' ,label: 'Active'},
    {name: 'done' ,label: 'Done'}
  ]

  render() {
    const {filter} = this.props;
    const buttons = this.buttons.map((item) => {
        const isActive = filter === item.name;
        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
        return(
          <button data-filter={item.name} 
                  type="button"
                  key={item.name}
                  className={`btn ${clazz}`}>{item.label}</button>
              )
    });

    return (
      <div className="btn-group" onClick={this.onFilter}>
        {buttons}
      </div>
    )
  }
}
