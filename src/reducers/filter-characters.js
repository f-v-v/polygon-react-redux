const initialState = {
    sortBy:'',
    innerSearch:''
}

const filterCharacters = (state = initialState, action ) =>{
    switch (action.type) {
        case 'SET_SORT_BY_CHARACTERS':
            return {
                ...state,
                sortBy: action.payload,
            };

        case 'SET_INNER_SEARCH_CHARACTERS':
            return {
                ...state,
                innerSearch: action.payload,
            };
    
        default :
            return state;
    }
}

export default filterCharacters;