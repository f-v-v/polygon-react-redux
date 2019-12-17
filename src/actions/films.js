import filmApi from '../services/film-servise';
import planetApi from '../services/planet-servise';

const FETCH_ALL_FILMS_REQUEST = 'FETCH_ALL_FILMS_REQUEST';
const FETCH_ALL_FILMS_SUCCESS = 'FETCH_ALL_FILMS_SUCCESS';
const FETCH_ALL_FILMS_FAILURE = 'FETCH_ALL_FILMS_FAILURE';
const CHANGE_CURRENT_FILM ='CHANGE_CURRENT_FILM';
const SET_CURRENT_FILM = 'SET_CURRENT_FILM';
const FETCH_RELATION_PLANETS_REQUEST = 'FETCH_RELATION_PLANETS_REQUEST';
const FETCH_RELATION_PLANETS_SUCCESS = 'FETCH_RELATION_PLANETS_SUCCESS';
const FETCH_RELATION_PLANETS_FAILURE = 'FETCH_RELATION_PLANETS_FAILURE';
const CHANGE_CURRENT_RELATION_PLANET = 'CHANGE_CURRENT_RELATION_PLANET';
const SET_CURRENT_RELATION_PLANET = 'SET_CURRENT_RELATION_PLANET';
const FETCH_CURRENT_FILM_REQUEST = 'FETCH_CURRENT_FILM_REQUEST';
const FETCH_CURRENT_FILM_SUCCESS = 'FETCH_CURRENT_FILM_SUCCESS';
const FETCH_CURRENT_FILM_FAILURE = 'FETCH_CURRENT_FILM_FAILURE';

const apiFilm = new filmApi();
const apiPlanet = new planetApi();
const allFilmsRequested = () => {
    return {type: FETCH_ALL_FILMS_REQUEST }
};
const allFilmsLoaded = (allFilms) => {
    return {
        type: FETCH_ALL_FILMS_SUCCESS,
        payload: allFilms
    }
};
const allFilmsError = (error) => {
    return {
        type: FETCH_ALL_FILMS_FAILURE,
        payload:error
    }
};

export const changeCurrentFilm = (upDown) => {
    return {
        type: CHANGE_CURRENT_FILM,
        payload:upDown
    }
};

export const setCurrentFilm = (index) => {
    return {
        type: SET_CURRENT_FILM,
        payload: index
    }
}

const relationPlanetRequested = () => {
    return { type:FETCH_RELATION_PLANETS_REQUEST };
}

const relationPlanetLoaded = (relationPlanet) => {
    return { 
        type:FETCH_RELATION_PLANETS_SUCCESS,
        payload: relationPlanet
    };
}

const relationPlanetError = (error) => {
    return { 
        type:FETCH_RELATION_PLANETS_FAILURE,
        payload: error
    };
}

export const changeCurrentRelPlanet = (upDown) => {
    return {
        type: CHANGE_CURRENT_RELATION_PLANET,
        payload:upDown
    }
};

export const setCurrentRelPlanet = (index) => {
    return {
        type: SET_CURRENT_RELATION_PLANET,
        payload: index
    }
}

const filmRequested = () => {
    return { type:FETCH_CURRENT_FILM_REQUEST };
}

const filmLoaded = (film) => {
    return { 
        type:FETCH_CURRENT_FILM_SUCCESS,
        payload: film
    };
}

const filmError = (error) => {
    return { 
        type:FETCH_CURRENT_FILM_FAILURE,
        payload: error
    };
}

const getFilm = (id) => (dispatch) =>  {
    dispatch(filmRequested());
    return apiFilm.fetchFilmById(id).then(
        (film) => dispatch(filmLoaded(film)), 
        (error) => dispatch(filmError(error.message))
    )
};

const getRelationPlanets = (arr) => (dispatch) =>  {
    dispatch(relationPlanetRequested());
    return apiPlanet.fetchPlanetByArrayId(arr, false).then(
        (relationPlanet) => dispatch(relationPlanetLoaded(relationPlanet)), 
        (error) => dispatch(relationPlanetError(error.message))
    )
};

const getFilmAndRelation = () => (dispatch, getState) => {
    const curState = getState();
    const currentId = curState.filmsPage.currentFilm.id;
    dispatch(getFilm(currentId)).then(() =>{
        const {filmsPage:{currentFilmFull:{film:{planets}}}} = getState();
        if (planets.length > 0 ) {
            return dispatch(getRelationPlanets(planets));
        }
    })
}


export const getAllFilms = () => (dispatch, getState) => {
    dispatch(allFilmsRequested());
    apiFilm.fetchAllFilms().then (
        ({allFilms}) => dispatch(allFilmsLoaded(allFilms)), 
        (error) => dispatch(allFilmsError(error.message))
    ).then (() => {
        return dispatch(getFilmAndRelation());
    })
}

export const setCurrentFilmWithRel = (index) => (dispatch, getState) => {
    if (index === getState().filmsPage.currentFilm.index) {return};
    dispatch(setCurrentFilm(index));
    dispatch(getFilmAndRelation());
}


export const changeCurrentFilmWithRel = (upDown) => (dispatch, getState) => {
    const curIdold = getState().filmsPage.currentFilm.id;
    dispatch(changeCurrentFilm(upDown));
    const curIdnew = getState().filmsPage.currentFilm.id;
    if (curIdold === curIdnew) return;
    dispatch(getFilmAndRelation());
}
