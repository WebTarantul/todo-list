import React from 'react';
import './header.css'

const Header = ({done,active}) => {

  return (
    <div className="header">
      <h1 className='header__title'>Todo List</h1>
      <h5 className="header__stat">{active} more to do, {done} done</h5>
    </div>
  )
}

export default Header;