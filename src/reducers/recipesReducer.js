import { SET_RECIPES } from '../actions/actions';

const initialState = {
    recipesList : []
  };
  
  function Reducer(state = initialState, action) {
    switch (action.type) {

      case SET_RECIPES:
        return {
          ...state,
          recipesList: action.payload,
        };

      default:
        return state;
    }
  }
  
  export default Reducer;