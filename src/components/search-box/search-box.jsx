import React from 'react';

import './search-box.css';

export const SearchBox = ({placeholder, handleSearchChange}) => (
    <div className="wrap">    <input className='search' type='search' placeholder = {placeholder} onChange={handleSearchChange}/>
    <button className='searchButton'><i className="fa fa-search"></i></button>
    </div>

)