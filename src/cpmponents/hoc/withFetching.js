import React from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default (isLoading = false, isError=null) => (WrappedComponent) => {
    const hocComponent = ({ ...props }) => {
        if (isLoading) {
            return <Spinner />
        };
        
        if (isError) {
            return <ErrorIndicator error={isError} />
        };
        return (<WrappedComponent {...props} />)
    }

    return hocComponent
}
