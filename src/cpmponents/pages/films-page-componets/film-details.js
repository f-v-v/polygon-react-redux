import React from 'react';
import {connect} from 'react-redux';
import ItemDetails, {Record}  from '../../item-details';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';


const PlanetDetails= (props) => {
    const {currentFilmFull:{film, isLoading, isError}} = props;
    if (isLoading) {
        return <Spinner />
    }
    
    if (isError) {
        return <ErrorIndicator error={isError} />
    }
    return (
        <ItemDetails name={film.title} image={film.img} 
                item = {film}
        >
        
            <Record field="dicription" label="Discription: "/>
            <Record field="director" label="Director film: "/>
            <Record field="producer" label="Producer film: "/>
            <Record field="release" label="Release data: "/>
            
        </ItemDetails>    
    )
}

const mapStateToProps = ({filmsPage:{currentFilmFull}}) => {
    return {
        currentFilmFull
    };
};

export default connect(mapStateToProps)(PlanetDetails);
