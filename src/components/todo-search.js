import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyles = {
    fontSize: '16px'
  }
  return <input style={searchStyles} className='todo__search' type='text' name='search' id='search' placeholder={searchText} />
}

export default SearchPanel;