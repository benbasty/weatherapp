import React, { useState } from 'react'
import './Search.css'
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, GEOApiOptions } from '../services/api';

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`,
      GEOApiOptions
      )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  //19:23


  return (
    <div className='container search'>
        <AsyncPaginate
          placeholder="🔍 Search for City"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
    </div>
  )
}

export default Search