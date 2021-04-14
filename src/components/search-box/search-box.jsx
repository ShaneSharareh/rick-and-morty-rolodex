import React from 'react';

import './search-box';

export const SearchBox = ({placeholder, handleSearchChange}) => (
    <input className='search' type='search' placeholder = {placeholder} onChange={handleSearchChange}/>
)