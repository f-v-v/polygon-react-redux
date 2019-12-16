import React from 'react'
import SearchInput from '../search-input'

import './search-panel.css'


const SearchPanel = ({search, title, onChangeSearch = () =>{} , onSubmitSearch=() =>{} }) => {
// TODO решить с onSubmit на форме! 
// Почему получаем 'Form submission canceled because the form is not connected'
    // const onChange = (e) => {
    //     // console.log(`SearchPanel e.target.value=${e.target.value}`)
    //     onChangeSearch(e.target.value);
    // }
    
    const onSubmit = (e) => {
        // debugger
        // e.preventdefault();???Почемуто выжает ошибку после чего происходит перезапуск приложения???
        onSubmitSearch();
    }

    
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">{title}</span>
            </div>
            <form className="form-inline" onSubmit={onSubmit}>
                <SearchInput search={search}
                        onChangeSearch={onChangeSearch}
                />    
                <button className="btn btn-outline-success" type="submit" >
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchPanel;