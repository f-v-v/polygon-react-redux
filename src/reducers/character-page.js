
const initialState = {
    characters:[],
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

const charactersPage = (state = initialState, action ) =>{
    // debugger;
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
        // case 'CHANGE_CURRENT_PAGE_CHARACTERS':
        //     return changeCurrentPage(state, action.payload)
        default :
            return state;
    }
}

export default charactersPage;