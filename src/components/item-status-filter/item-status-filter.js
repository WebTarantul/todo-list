import React, {Component} from 'react';
import './item-status-filter.css'
import {withRouter} from 'react-router-dom'

class ItemStatusFilter extends Component {
  
  buttonsData = [
    {label: 'All', name: 'all'},
    {label: 'Active', name: 'active'},
    {label: 'Done', name: 'done'}
  ]

  render () {
    const {filterStatus,onFilterStatus,match,history} = this.props;
    const buttons = this.buttonsData.map(el => {
      const isActive = el.name === filterStatus;
      let classes = 'btn';

        if (isActive) {
          classes += ' btn-info'
        }else{
          classes += ' btn-outline-secondary'
        }

        return <button className={classes}
                      key={el.name}
                      name={el.name}
                      onClick={(e) => {
                        history.push(`#/${el.name}`)
                        return onFilterStatus(e.target.name)}}
                        > {el.label} </button>
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}

export default withRouter(ItemStatusFilter)