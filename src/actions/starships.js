import starshipApi from '../services/starship-servise'

const FETCH_ALL_STARSHIPS_REQUEST = 'FETCH_ALL_STARSHIPS_REQUEST';
const FETCH_ALL_STARSHIPS_SUCCESS = 'FETCH_ALL_STARSHIPS_SUCCESS';
const FETCH_ALL_STARSHIPS_FAILURE = 'FETCH_ALL_STARSHIPS_FAILURE';
const SET_SERVER_SEARCH_STARSHIPS = 'SET_SERVER_SEARCH_STARSHIPS';
const SET_CURRENT_PAGE_STARSHIPS = 'SET_CURRENT_PAGE_STARSHIPS';

const api = new starshipApi();
const allStarshipsRequested = () => {
    return {type: FETCH_ALL_STARSHIPS_REQUEST }
};
const allStarshipsLoaded = (allStarships) => {
    return {
        type: FETCH_ALL_STARSHIPS_SUCCESS,
        payload: allStarships
    }
};
const allStarshipsError = (error) => {
    return {
        type: FETCH_ALL_STARSHIPS_FAILURE,
        payload:error
    }
};
const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE_STARSHIPS,
        payload:page
    }
};

export const setServerSearch = (serverSearch) => {
    // console.log(`setServerSearch setServerSearch=${serverSearch}`)
    return {
        type: SET_SERVER_SEARCH_STARSHIPS,
        payload: serverSearch
    }
};

export const getAllStarships = (page=1) => (dispatch, getState) => {
    dispatch(allStarshipsRequested());
    const search = getState().starshipsPage.serverSearch
    // console.log(`from getAllStarships =${search}`)
    return api.fetchSearchStarship(search, page, false).then ( (data) =>{
        dispatch(allStarshipsLoaded(data));
        dispatch(setCurrentPage(page))
    }).catch (error => {
        dispatch(allStarshipsError(error.message))
    });
}
