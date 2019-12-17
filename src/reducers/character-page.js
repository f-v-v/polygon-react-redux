
const initialState = {
    characters:[],
    total:0,
    currentPage:1,
    serverSearch:'',
    isLoading: false,
    isError: null,
}

const charactersPage = (state = initialState, action ) =>{
    switch (action.type) {
        case 'FETCH_ALL_CHARACTERS_REQUEST':
            return {
                ...state,
                characters:[],
                isLoading: true,
                isError: null
            };
        case 'FETCH_ALL_CHARACTERS_SUCCESS':
            return {
                ...state,
                characters: action.payload.allCharacters,
                total: action.payload.totalCharacters,
                isLoading: false,
                isError: null
            };
        case 'FETCH_ALL_CHARACTERS_FAILURE':
            return {
                ...state,
                characters:[],
                isLoading:false,
                isError: action.payload
            };
        case 'SET_SERVER_SEARCH_CHARACTERS':
            return {
                ...state,
                serverSearch: action.payload,
             };
        case 'SET_CURRENT_PAGE_CHARACTERS':
            return {
                ...state,
                currentPage: action.payload,
            };
        default :
            return state;
    }
}

export default charactersPage;