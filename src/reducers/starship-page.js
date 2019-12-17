
const initialState = {
    starships:[],
    total:0,
    currentPage:1,
    serverSearch:'',
    isLoading: false,
    isError: null,
}

const starshipsPage = (state = initialState, action ) =>{
    switch (action.type) {
        case 'FETCH_ALL_STARSHIPS_REQUEST':
            return {
                ...state,
                starships:[],
                isLoading: true,
                isError: null
            };
        case 'FETCH_ALL_STARSHIPS_SUCCESS':
            return {
                ...state,
                starships: action.payload.allStarships,
                total: action.payload.totalStarships,
                isLoading: false,
                isError: null
            };
        case 'FETCH_ALL_STARSHIPS_FAILURE':
            return {
                ...state,
                starships:[],
                isLoading:false,
                isError: action.payload
            };
        case 'SET_SERVER_SEARCH_STARSHIPS':
            return {
                ...state,
                serverSearch: action.payload,
             };
        case 'SET_CURRENT_PAGE_STARSHIPS':
            return {
                ...state,
                currentPage: action.payload,
            };
        default :
            return state;
    }
}

export default starshipsPage;