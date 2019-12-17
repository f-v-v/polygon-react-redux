import React from 'react';
import {Link} from 'react-router-dom';

import  './pagination.css'
// TODO вынести в отдельный компонет?!
const  PaginationLink = ({total, currentPage, baseRefUrl, search}) => {
    console.log(`from PaginationLink total=${total} currentPage=${currentPage} base=${baseRefUrl}`)
    

    
    const count = Math.ceil(total/10); // perPage is const in api and =10
    const arrButtons = Array.from({ length: count }, (v, i) => i+1);
    const curPage = parseInt(currentPage);
    let prev, next;
    if (curPage===1) {
        prev = (
            <li className="page-item disabled" >
                <Link to={`${baseRefUrl}1/${search}`} className="page-link" tabIndex="-1" aria-disabled="true">Previous</Link>
            </li>
        ); 
    } else {
        prev = (
            <li className="page-item">
                <Link to={`${baseRefUrl}${curPage-1}/${search}`} className="page-link">Previous</Link>
            </li>
        );         
    }
    if (curPage===count) {
        next = (
            <li className="page-item disabled">
                <Link to={`${baseRefUrl}${count}/${search}`} className="page-link" tabIndex="-1" aria-disabled="true">Next</Link>
            </li>
        );    
    } else {
        next = (
            <li className="page-item">
                <Link to={`${baseRefUrl}${curPage+1}/${search}`} className="page-link">Next</Link>
            </li>
        );        
    }
    
    const pageButtons = arrButtons.map((item) => {
        let classActive = '';
        if (+item === +curPage) {
            classActive = ' active'
        };
        return (
            
            <li className={`page-item${classActive}` } key={item}><Link to={`${baseRefUrl}${item}/${search}`} className="page-link">{item}</Link></li>
        );
    })

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {prev}
                {pageButtons}
                {next}
            </ul>
        </nav>
    );
}

export default PaginationLink;