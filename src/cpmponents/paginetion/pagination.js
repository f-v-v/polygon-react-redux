import React from 'react';

import  './pagination.css'

const  Pagination = ({total, currentPage, getData}) => {

    const count = Math.ceil(total/10); // perPage is const in api and =10
    const prevClick= () => {
        if (currentPage === 1) {return}
        getData(currentPage-1);
    } 
    const nextClick = () => {
        if (currentPage === count) {return}
        getData(currentPage+1);
    }
    let prev, next;
    if (currentPage===1) {
        prev = (
            <button 
            type="button"
            onClick={prevClick}
            className="btn btn-outline-secondary disabled">
                    prev
            </button>
        ); 
        next = (
            <button 
            type="button"
            onClick={nextClick}
            className="btn btn-outline-secondary">
                    next
            </button>
        ); 
        
    } else if (currentPage===count) {
        prev = (
            <button 
            type="button"
            onClick={prevClick}
            className="btn btn-outline-secondary">
                    prev
            </button>
        ); 
        next = (
            <button 
            type="button"
            onClick={nextClick}
            className="btn btn-outline-secondary disabled">
                    next
            </button>
         );
        } else {
            prev = (
                <button 
                type="button"
                onClick={prevClick}
                className="btn btn-outline-secondary">
                    prev
            </button>
        ); 
        next = (
            <button 
            type="button"
            onClick={nextClick}
            className="btn btn-outline-secondary">
                    next
            </button>
        );
    }
    
    const arrButtons = Array.from({ length: count }, (v, i) => i+1);
    const pageButtons = arrButtons.map((item, index) => {
    const isActive = +item === +currentPage;
        const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary'); 
        return (
                
          <button key={item}
                  type="button"
                  onClick={() => getData(item)}
                  className={classNames}>{item}</button>
        );
    })

    return (
        <div className="btn-group">
            {prev}
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                {pageButtons}
            </div> 
            {next}
        </div>
    );
}

export default Pagination;