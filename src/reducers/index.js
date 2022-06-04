import { combineReducers } from 'redux';

import recipesReducerFile from './recipesReducer';
import suggestionsReducerFile from './suggestionsReducer';


const rootReducer = combineReducers({
  recipesReducer: recipesReducerFile,
  suggestionsReducer : suggestionsReducerFile
 
});

export default rootReducer;