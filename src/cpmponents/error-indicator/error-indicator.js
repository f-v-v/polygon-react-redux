import React from 'react';
import './error-indicator.css'

const ErrorIndicator = ({error}) => {
    return (<div>
            <span>Oh, Error: {error}</span> 
         </div>);
}

export default ErrorIndicator;