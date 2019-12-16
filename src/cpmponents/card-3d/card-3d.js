import React from 'react';
import './card-3d.css';

const Card3d = ({ front, back }) => {
    // console.log(`front=${front}, back=${back}`)
    return (
       
            <div className="card3d">
                <div className="front">
                    {front}
                </div>
                <div className="back">
                    {back}
                </div>
            </div>
    );
}

export default Card3d;