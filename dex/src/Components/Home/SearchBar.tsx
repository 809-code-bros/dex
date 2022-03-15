import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from '@iconify/react';

import "./SearchBar.scss"
const SearchBar = () => {
  return (
    <div className='searchBar'>  
    <input 
    type="text"
    className='icon-search '
    placeholder='Search'
    
    
    />


    </div>
  )
}

export default SearchBar;