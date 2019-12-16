import planetApi from '../services/planet-servise'

const FETCH_ALL_PLANETS_REQUEST = 'FETCH_ALL_PLANETS_REQUEST';
const FETCH_ALL_PLANETS_SUCCESS = 'FETCH_ALL_PLANETS_SUCCESS';
const FETCH_ALL_PLANETS_FAILURE = 'FETCH_ALL_PLANETS_FAILURE';
const CHANGE_CURRENT_PLANET ='CHANGE_CURRENT_PLANET';
const SET_CURRENT_PLANET = 'SET_CURRENT_PLANET';


const api = new planetApi();
const allPlanetsRequested = () => {
    return {type: FETCH_ALL_PLANETS_REQUEST }
};
const allPlanetsLoaded = (allPlanets) => {
    return {
        type: FETCH_ALL_PLANETS_SUCCESS,
        payload: allPlanets
    }
};
const allPlanetsError = (error) => {
    return {
        type: FETCH_ALL_PLANETS_FAILURE,
        payload:error
    }
};

export const changeCurrentPlanet = (upDown) => {
    return {
        type: CHANGE_CURRENT_PLANET,
        payload:upDown
    }
};

export const setCurrentPlanet = (index) => {
    return {
        type: SET_CURRENT_PLANET,
        payload: index
    }
}


export const getAllPlanets = () => (dispatch) => {
    dispatch(allPlanetsRequested());
    return api.fetchAllPlanets().then ( ({allPlanets}) =>{
        dispatch(allPlanetsLoaded(allPlanets));
    }).catch (error => {
        dispatch(allPlanetsError(error.message))
    });
}