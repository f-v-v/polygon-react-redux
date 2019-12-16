import React from 'react';
import './item-details.css';

export const Record = (props) => {
    const {item, field, label} = props;

    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li> 
    );
}

export const Details = ({name, item, children}) => {
    return (
        <>
            <div className="card-body">
                    <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, { item });
                    })
                    }
                </ul>
            </div>
        </>
    )
}


const ItemDetails = (props) => {
    const {name, image, item, children} = props;
    if (!item) {
        return <span>Not selected item</span>;
    }

    return (
        
        <div className="item-details card">
            <img className="item-image card-img-top"
            src={image}
            alt={name}/>

            <Details name={name} item={item}>
                {children}
            </Details>
        </div> 
    )
};

export default ItemDetails;
