import React from 'react'

import './sort-panel.css'

// const filterButtons = [
//     { name: '', label: 'Без сортировки' },
//     { name: 'name', label: 'Имени' },
//     { name: 'height', label: 'Росту' },
//     { name: 'mass', label: 'Массе' }
//   ];


const SortPanel = ({arraySortBy, sortBy, onSortByChange = () =>{}}) => {

    const buttons = arraySortBy.map(({name, label}) => {
      const isActive = name === sortBy;
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary'); 
      return (
              
        <button key={name}
                type="button"
                onClick={() => onSortByChange(name)}
                className={classNames}>{label}</button>
      );
    });
    
    return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <div className="input-group-prepend">
            <span className="input-group-text" >Сортировать по </span>
        </div>
        {buttons}
    </div>  
    )
}

export default SortPanel;