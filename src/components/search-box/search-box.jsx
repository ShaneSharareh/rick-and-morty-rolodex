import React from 'react';

import './search-box.css';

export const SearchBox = ({placeholder, handleSearchChange}) => (
       <input className='search' type='search' placeholder = {placeholder} onChange={handleSearchChange}/>
   

)