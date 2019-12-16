import React from 'react';
import './my-card.css';

const MyCard = () => {
    
    return (
        <div className="wrapper">
            <div className="card">
                <div className="front">
                    <img src="https://images.pexels.com/photos/3302039/pexels-photo-3302039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image"/>
                </div>
                <div className="back">
                    <div className="content">
                        <h1>
                            Jone Dou
                            <span>Front-end developer</span>
                        </h1>
                        <ul className="socials">
                            <li>
                                <a href="#"><i className="fa fa-youtube"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-vk"></i></a>
                                <a href="#"><i className="fa fa-github"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCard;