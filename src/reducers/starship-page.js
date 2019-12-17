
const initialState = {
    starships:[],
    total:0,
    currentPage:1,
    serverSearch:'',
    isLoading: false,
    isError: null,
}

// const changeCurrentPage = ({state, change}) => {
//     const {currentPage} = state;
//     const countPage=Math.ceil(state.total/10);
//     if ((currentPage === 1 && change ===-1) || (countPage === countPage && change === 1)) {
//         return {...state};
//     }
//     return {
//         ...state,
//         currentPage: currentPage + change
//     }
// }

const starshipsPage = (state = initialState, action ) =>{
    // debugger;
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
        // case 'CHANGE_CURRENT_PAGE_STARSHIPS':
        //     return changeCurrentPage(state, action.payload)
        default :
            return state;
    }
}

export default starshipsPage;