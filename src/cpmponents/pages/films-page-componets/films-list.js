import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../../item-list';
import {setCurrentFilmWithRel,
    changeCurrentFilmWithRel,
    } from '../../../actions/films';

const FilmsList = (props) => {
    const {films, currentFilm, setCurrentFilmWithRel, changeCurrentFilmWithRel } = props;
    
    return (
        <div className="list-item">
            <div> Films of STARS WAR </div>
            <ItemList items={films} currentIndex={currentFilm.index}
                changeCurrentItem={changeCurrentFilmWithRel} setCurrentItem={setCurrentFilmWithRel}
            > 
                {renderTitle}
            </ItemList>
        </div>
    )
}

const renderTitle = ({title}) => {
    return <span> {title} </span>
};

const mapStateToProps = ({filmsPage:{films, currentFilm}}) => {
    return {
        films,
        currentFilm,
    };
};
const mapDispatchToProps = {
    setCurrentFilmWithRel,
    changeCurrentFilmWithRel,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList)
