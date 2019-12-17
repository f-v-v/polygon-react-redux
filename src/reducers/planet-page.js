
const initialState = {
    planets:[],
    total:0,
    currentPage:1,
    currentPlanet:{
        id:null,
        index:0
    },
    isLoading: false,
    isError: null
}

const planetsPage = (state = initialState, action ) =>{
    switch (action.type) {
        case 'FETCH_ALL_PLANETS_REQUEST':
            return {
                ...state,
                planets:[],
                isLoading: true,
                isError: null
            };
        case 'FETCH_ALL_PLANETS_SUCCESS':
            return {
                ...state,
                planets:action.payload,
                currentPlanet:{
                    id:action.payload[0].id,
                    index:0
                },
                isLoading: false,
                isError: null
            };
        case 'FETCH_ALL_PLANETS_FAILURE':
            return {
                ...state,
                planets:[],
                isLoading:false,
                isError: action.payload
            };
        case 'UP_CURRENT_PLANET':
            if (state.currentPlanet.index === 0) return state;
            return {
                ...state,
                currentPlanet:{
                    id:state.planets[state.currentPlanet.index-1].id,
                    index:state.currentPlanet.index-1
                }
            } 
        case 'DOWN_CURRENT_PLANET':
            if (state.currentPlanet.index === state.planets.length-1) return state;
            return {
                ...state,
                currentPlanet:{
                    id:state.planets[state.currentPlanet.index+1].id,
                    index:state.currentPlanet.index+1
                }
            }
        case 'CHANGE_CURRENT_PLANET':
            if ((state.currentPlanet.index === 0 && action.payload === -1) ||
            (state.currentPlanet.index === state.planets.length-1 && action.payload === 1)
            ) return state;
            const newIndex = state.currentPlanet.index + action.payload;
            return {
                ...state,
                currentPlanet:{
                    id:state.planets[newIndex].id,
                    index:newIndex
                }
            }
        case 'SET_CURRENT_PLANET':
                return {
                    ...state,
                    currentPlanet:{
                        id:state.planets[action.payload].id,
                        index:action.payload
                    }
                } 
        default :
            return state;
    }
}

export default planetsPage;