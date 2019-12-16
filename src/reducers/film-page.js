
const initialState = {
    films:[],
    total:0,
    currentPage:1,
    currentFilm:{
        id:null,
        index:0,
    },
    currentFilmFull:{
        film:{},
        isLoading:false,
        isError:null
    },
    relationPlanet:{
        planets:[],
        isLoading:false,
        isError:null,
        currentPlanetIndex:0
    },
    isLoading: false,
    isError: null
}

const filmsPage = (state = initialState, action ) =>{
    // debugger;
    switch (action.type) {
        case 'FETCH_ALL_FILMS_REQUEST':
            return {
                ...state,
                films:[],
                isLoading: true,
                isError: null
            };
        case 'FETCH_ALL_FILMS_SUCCESS':
            return {
                ...state,
                films:action.payload,
                currentFilm:{
                    id:action.payload[0].id,
                    index:0
                },
                isLoading: false,
                isError: null
            };
        case 'FETCH_ALL_FILMS_FAILURE':
            return {
                ...state,
                films:[],
                isLoading:false,
                isError: action.payload
            };
        case 'CHANGE_CURRENT_FILM':
            if ((state.currentFilm.index === 0 && action.payload === -1) ||
            (state.currentFilm.index === state.films.length-1 && action.payload === 1)
            ) return state;
            const newIndex = state.currentFilm.index + action.payload;
            return {
                ...state,
                currentFilm:{
                    id:state.films[newIndex].id,
                    index:newIndex
                }
            }
        case 'SET_CURRENT_FILM':
            return {
                ...state,
                currentFilm:{
                    id:state.films[action.payload].id,
                    index:action.payload
                }
            }
        case 'FETCH_RELATION_PLANETS_REQUEST':
            return {
                ...state,
                relationPlanet:{
                    planets:[],
                    isLoading: true,
                    isError: null,
                    currentPlanetIndex:0

                },
            };
        case 'FETCH_RELATION_PLANETS_SUCCESS':
            // debugger
            return {
                ...state,
                relationPlanet:{
                    planets:action.payload,
                    isLoading: false,
                    isError: null,
                    currentPlanetIndex:0
                }
            };
        case 'FETCH_RELATION_PLANETS_FAILURE':
            return {
                ...state,
                relationPlanet:{
                    planets:[],
                    isLoading: false,
                    isError: action.payload,
                    currentPlanetIndex:0
                }
            };
        case 'CHANGE_CURRENT_RELATION_PLANET':
            if ((state.relationPlanet.currentPlanetIndex === 0 && action.payload === -1) ||
            (state.relationPlanet.currentPlanetIndex === state.relationPlanet.planets.length-1 && action.payload === 1)
            ) return state;
            const newIndexPlanet = state.relationPlanet.currentPlanetIndex + action.payload;
            return {
                ...state,
                relationPlanet:{
                    ...state.relationPlanet,
                    currentPlanetIndex:newIndexPlanet
                }
            }
        case 'SET_CURRENT_RELATION_PLANET':
            return {
                ...state,
                relationPlanet:{
                    ...state.relationPlanet,
                    currentPlanetIndex:action.payload
                }
            }
        case 'FETCH_CURRENT_FILM_REQUEST':
            return {
                ...state,
                currentFilmFull:{
                    film:{},
                    isLoading: true,
                    isError: null
                },
            };
        case 'FETCH_CURRENT_FILM_SUCCESS':
            return {
                ...state,
                currentFilmFull:{
                    film:action.payload,
                    isLoading: false,
                    isError: null
                }
            };
        case 'FETCH_CURRENT_FILM_FAILURE':
            return {
                ...state,
                currentFilmFull:{
                    film:{},
                    isLoading: false,
                    isError: action.payload
                }
            };

        default :
            return state;
    }
}

export default filmsPage;