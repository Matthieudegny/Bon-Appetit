import { SET_RECIPES } from '../actions/actions';
import { SET_LOADING_TRUE } from '../actions/actions';
import { SET_LOADING_FALSE } from '../actions/actions';

const initialState = {
    recipesList : [],
    loading: false
  };
  
  function Reducer(state = initialState, action) {
    switch (action.type) {

      case SET_RECIPES:
        return {
          ...state,
          recipesList: action.payload,
          loading:false,
        };

      case SET_LOADING_TRUE:
        return {
          ...state,
          loading: true,
        };
        
      default:
        return state;
    }
  }
  
  export default Reducer;