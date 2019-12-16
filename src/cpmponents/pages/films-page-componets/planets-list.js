import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';
import ItemList from '../../item-list';
import {setCurrentRelPlanet,
        changeCurrentRelPlanet
    } from '../../../actions/films';

const PlanetsList = (props) => {
    const {relationPlanet:{isLoading, isError, planets, currentPlanetIndex}, 
            currentFilmFull:{film:{title}}, setCurrentRelPlanet, changeCurrentRelPlanet } = props;
    if (isLoading) {
        return <Spinner />
    }
    
    if (isError) {
        return <ErrorIndicator error={isError} />
    }
    
    return (
        <div className="list-item">
            <div> Plannets in film: "{title}" </div>
            <ItemList items={planets} currentIndex={currentPlanetIndex}
                changeCurrentItem={changeCurrentRelPlanet} setCurrentItem={setCurrentRelPlanet}
            > 
                {renderName}
            </ItemList>
        </div>
    )
}

const renderName = ({name}) => {
    return <span> {name} </span>
};

const mapStateToProps = ({filmsPage:{relationPlanet, currentFilmFull}}) => {
    return {
        currentFilmFull,
        relationPlanet
    };
};
const mapDispatchToProps = {
    setCurrentRelPlanet,
    changeCurrentRelPlanet
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsList)
