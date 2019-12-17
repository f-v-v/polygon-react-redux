import React from 'react';
import {Record, Details} from '../item-details';
import Card3d from '../card-3d';

import  './card-item.css'

const  CardItem = ({item, mapFields}) => {
    const fields = mapFields.map((item) =>{
        return (
            <Record field={item.field} label={item.label} key={item.field}/>
        )
    })

    const front = (
        <img src={item.img} alt={item.name}/>
    );
    const back = (
        <Details name={item.name} 
                item = {item}
        >
            {fields}
        </Details>
    );
    return (
        <div className="card-item">
            <Card3d front={front} back={back} />
        </div>
    );
}

export default CardItem;