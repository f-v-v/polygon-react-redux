import React from 'react';
import {Link} from 'react-router-dom';


import  './pagination.css'

const  Pagination = ({total, currentPage, baseRefUrl,
                    changeCurrentPage,
                    setServerSearch}) => {
    // console.log(`total=${total} match.params.page=${match.params.page}`)
    
    // const onClick = () => {history.push(`/characters/${page}`)};
    // const onClick = () => {};
    const prevClick= () => {
        changeCurrentPage(-1);
    } 
    const nextClick = () => {
        changeCurrentPage(1);
    }
    const count = Math.ceil(total/10); // perPage is const in api and =10
    // const navButtons = [...Array(count).keys()];
    const arrButtons = Array.from({ length: count }, (v, i) => i+1);
    // console.log(`navButtons=${navButtons}`);
    let prev, next;
    if (currentPage==1) {
        prev = (
            <li className="page-item disabled" onClick={prevClick}>
                <Link to={`${baseRefUrl}1`} className="page-link" tabIndex="-1" aria-disabled="true">Previous</Link>
            </li>
        ); 
        next = (
            <li className="page-item" onClick={nextClick}>
                <Link to={`${baseRefUrl}${currentPage+1}`} className="page-link">Next</Link>
            </li>
        );
    } else if (currentPage==count) {
        prev = (
            <li className="page-item" onClick={prevClick}>
                <Link to={`${baseRefUrl}${currentPage-1}`} className="page-link">Previous</Link>
            </li>
        ); 
        next = (
            <li className="page-item disabled" onClick={nextClick}>
                <Link to={`${baseRefUrl}${count}`} className="page-link" tabIndex="-1" aria-disabled="true">Next</Link>
            </li>
        );
    } else {
        prev = (
            <li className="page-item" onClick={prevClick}>
                <Link to={`${baseRefUrl}${currentPage-1}`} className="page-link">Previous</Link>
            </li>
        ); 
        next = (
            <li className="page-item" onClick={nextClick}>
                <Link to={`${baseRefUrl}${currentPage+1}`} className="page-link">Next</Link>
            </li>
        );
    }
    
    const pageButtons = arrButtons.map((item, index) => {
        // const link=`/characters/${item}`;
        // console.log(`page=${page} item=${item}`);
        let classActive = '';
        if (+item === +currentPage) {
            classActive = ' active'
            // return (
            // <li className="page-item active" aria-current="page" onClick={onClick} key={item}>
            //     <Link to={`/characters/${item}`} className="page-link">{item}<span className="sr-only">(current)</span></Link>
            // </li>)
        };
        return (
            
            <li className={`page-item${classActive}` } key={item}><Link to={`${baseRefUrl}${item}`} className="page-link" onClick={setServerSearch(item)}>{item}</Link></li>
        );
    })

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {prev}
                {/* <li className={`page-item ${page}=1?disabled)` } onClick={onClick}>
                    <Link to="/characters/1" className="page-link" tabIndex="-1" aria-disabled="true">Previous</Link>
                </li> */}
                {pageButtons}
                {/* <li className="page-item"><Link to="/characters/1" className="page-link" onClick={onClick}>1</Link></li>
                <li className="page-item active" aria-current="page" onClick={onClick}>
                    <Link to="/characters/2" className="page-link">2 <span className="sr-only">(current)</span></Link>
                </li>
                <li className="page-item"><Link to="/characters/3" className="page-link" onClick={onClick}>3</Link></li> */}
                {next}
                {/* <li className="page-item" >
                    <Link to="/films" className="page-link">Next</Link>
                </li> */}
            </ul>
        </nav>
    );
}

// const mapStateToProps = ({charactersPage:{total}}) => {
//     return {
//         total
//     };
// };

// export default compose(connect(mapStateToProps), withRouter)(Pagination);
export default Pagination;