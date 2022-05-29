import {
  createStore, applyMiddleware, compose,
} from 'redux';
import reducer from '../reducers'
import middlewareRecipes from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(middlewareRecipes),
);

const store = createStore(reducer,enhancers);

export default store;

