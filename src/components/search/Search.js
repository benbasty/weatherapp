import React from 'react'
import './Search.css'
import {MdLocationOn} from 'react-icons/md';

const Search = () => {
  return (
    <div className='container search'>
        <form>
            <input type='text' aria-label="search" placeholder='🔍 Search City'/>
        </form>
        <MdLocationOn />
        <div className='temperature'>
            <h4>°C | °F</h4>
        </div>
    </div>
  )
}

export default Search