const SET_SORT_BY_CHARACTERS = 'SET_SORT_BY_CHARACTERS';
const SET_INNER_SEARCH_CHARACTERS = 'SET_INNER_SEARCH_CHARACTERS';

export const setSortBy = (sortBy) => {
    return {
        type: SET_SORT_BY_CHARACTERS,
        payload: sortBy
    }
};

export const setInnerSearch = (innetSearch) => {
    return {
        type: SET_INNER_SEARCH_CHARACTERS,
        payload: innetSearch
    }
};
