import { SET_RECIPES } from '../actions/actions';
import { SET_LOADING_TRUE } from '../actions/actions';
import { SET_MESSAGE_NULL } from '../actions/actions';
import { SET_MESSAGE_SEARCHVALUE_NULL } from '../actions/actions'

const initialState = {
    recipesList : [],
    loading: false,
    message: ''
  };
  
  function Reducer(state = initialState, action) {
    switch (action.type) {

      case SET_RECIPES:
        return {
          ...state,
          recipesList: action.payload,
          loading:false,
          message:'',
        };

      case SET_LOADING_TRUE:
        return {
          ...state,
          loading: true,
        };

      case SET_MESSAGE_NULL:
        return {
          ...state,
          message: "Sorry, we didn't find any recipes, whrite something else, if you don't know the exact name of your recipe, \
           just write the main ingredient, for exemple chicken, salmon, salad...",
          loading:false,
          recipesList: [],
        }

      case SET_MESSAGE_SEARCHVALUE_NULL:
        return {
          ...state,
          message: "Before to search, please write something "
        }
        
      default:
        return state;
    }
  }
  
  export default Reducer;