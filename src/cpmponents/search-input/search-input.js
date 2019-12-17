import React from 'react'

import './search-input.css'


const SearchInput = ({search, title, onChangeSearch = () =>{}}) => {
    const onChange = (e) => {
        onChangeSearch(e.target.value);
    }
    
    return (

        <input className="form-control" type="search" placeholder="Search" aria-label="Search"
                value={search} onChange={onChange}
        />
    )
}

export default SearchInput;
