import React from 'react'

import './search-input.css'


const SearchInput = ({search, title, onChangeSearch = () =>{}}) => {
// TODO решить с onSubmit на форме! 
// Почему получаем 'Form submission canceled because the form is not connected'
    const onChange = (e) => {
        // console.log(`SearchPanel e.target.value=${e.target.value}`)
        onChangeSearch(e.target.value);
    }
    
    return (
        // <div className="input-group">
        //     <div className="input-group-prepend">
        //         <span className="input-group-text">{title}</span>
        //     </div>
        //         <input className="form-control" type="search" placeholder="Search" aria-label="Search"
        //                 value={search} onChange={onChange}
        //         />
        // </div>
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"
                value={search} onChange={onChange}
        />
    )
}

export default SearchInput;
