import React from 'react';

const ListItem = ({label, important=false}) => {
  const itemStyle = {
    color: important ? 'tomato' : 'black'
  }
  return (
    <span className="todo__text" style={itemStyle}>{label}</span>
    )
  }
export default ListItem;