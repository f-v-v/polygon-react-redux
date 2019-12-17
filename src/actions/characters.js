import characterApi from '../services/character-servise'

const FETCH_ALL_CHARACTERS_REQUEST = 'FETCH_ALL_CHARACTERS_REQUEST';
const FETCH_ALL_CHARACTERS_SUCCESS = 'FETCH_ALL_CHARACTERS_SUCCESS';
const FETCH_ALL_CHARACTERS_FAILURE = 'FETCH_ALL_CHARACTERS_FAILURE';
const SET_SERVER_SEARCH_CHARACTERS = 'SET_SERVER_SEARCH_CHARACTERS';
const SET_CURRENT_PAGE_CHARACTERS = 'SET_CURRENT_PAGE_CHARACTERS';

const api = new characterApi();
const allCharactersRequested = () => {
    return {type: FETCH_ALL_CHARACTERS_REQUEST }
};
const allCharactersLoaded = (allCharacters) => {
    return {
        type: FETCH_ALL_CHARACTERS_SUCCESS,
        payload: allCharacters
    }
};
const allCharactersError = (error) => {
    return {
        type: FETCH_ALL_CHARACTERS_FAILURE,
        payload:error
    }
};
const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE_CHARACTERS,
        payload:page
    }
};

export const setServerSearch = (serverSearch) => {
    return {
        type: SET_SERVER_SEARCH_CHARACTERS,
        payload: serverSearch
    }
};

export const getAllCharacters = (page=1) => (dispatch, getState) => {
    dispatch(allCharactersRequested());
    const search = getState().charactersPage.serverSearch
    return api.fetchSearchCharacter(search, page, false).then ( (data) =>{
        dispatch(allCharactersLoaded(data));
        dispatch(setCurrentPage(page))
    }).catch (error => {
        dispatch(allCharactersError(error.message))
    });
}

// export const getAllSearchCharacters = (page=1) => (dispatch, getState) => {
//     dispatch(allCharactersRequested());
//     const search = getState().charactersPage.serverSearch
//     console.log(`from getAllSearchCharacters =${search}`)
//     return api.fetchSearchCharacter(search, page, false).then ( (data) =>{
//         dispatch(allCharactersLoaded(data));
//     }).catch (error => {
//         dispatch(allCharactersError(error.message))
//     });
// }
