import { combineReducers } from 'redux';

import recipesReducerFile from './recipesReducer';


const rootReducer = combineReducers({
  recipesReducer: recipesReducerFile,
 
});

export default rootReducer;