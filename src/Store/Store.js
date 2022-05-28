import { createStore } from 'redux';
import messagesReducer from '../reducers/Reducer';

const store = createStore(
  messagesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // pour permettre au redux dev tool de fonctionner
);

export default store;