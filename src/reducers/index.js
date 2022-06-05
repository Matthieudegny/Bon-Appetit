import { combineReducers } from 'redux';

import recipesReducerFile from './recipesReducer';
import suggestionsReducerFile from './suggestionsReducer';
import fridgeReducerFile from './fridgeReducer';


const rootReducer = combineReducers({
  recipesReducer: recipesReducerFile,
  suggestionsReducer : suggestionsReducerFile,
  fridgeReducer: fridgeReducerFile
  
});

export default rootReducer;