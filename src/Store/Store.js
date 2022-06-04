import {
  createStore, applyMiddleware, compose,
} from 'redux';
import reducer from '../reducers'
import middlewareRecipes from './recipesMiddleware';
import middlewareSuggestions from './suggestionsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(middlewareRecipes, middlewareSuggestions),
);

const store = createStore(reducer,enhancers);

export default store;

