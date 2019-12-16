import { combineReducers } from 'redux';
import charactersPage from './character-page';
import filmsPage from './film-page';
import planetsPage from './planet-page';
import filterCharacters from './filter-characters';

const rootReducer = combineReducers({
  charactersPage,
  filmsPage,
  planetsPage,
  filterCharacters
})

export default rootReducer