import React from 'react';
import CardItem from '../card-item';

const GridCards = ({items, mapFields}) => {

    const grid = items.map( item => {
        return (
            <CardItem item={item} mapFields={mapFields} key={item.id} />
        );
    })
    return (
        <div className="row align-items-start">
            {grid}
        </div>
    )
}

export default GridCards;