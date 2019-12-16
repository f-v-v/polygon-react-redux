import React from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
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


const ItemDetails = (props) => {
    const {isLoading = false, isError = null, name, image, item} = props;
    if (!item) {
        return <span>Not selected item</span>;
    }
   
    if (isLoading) {
        return <Spinner />
    };
    
    if (isError) {
        return <ErrorIndicator error={isError} />
    };
    
    return (
        
        <div className="item-details card">
            <img className="item-image card-img-top"
            src={image}
            alt={name}/>

            <div className="card-body">
                <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, { item });
                })
                }
            </ul>
            </div>
        </div> 
    )
};

export default ItemDetails;
