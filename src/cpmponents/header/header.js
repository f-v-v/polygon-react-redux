import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header" >
            <ul className="d-flex justify-content-center">
                <li>
                    <Link to="/films">FILMS</Link> 
                </li>
                <li>
                    <Link to="/characters/">PEOPLE</Link>     
                </li>
                <li>
                    <Link to="/starships/1">STARSHIPS</Link>     
                </li>
                <li>
                    <Link to="/planets">PLANETS</Link>     
                </li>
            </ul>
            
        </header>
    )
}

export default Header
