import { SET_RECIPES_FRIDGE } from '../actions/actions';
import { SET_LOADING_FRIDGE_TRUE } from '../actions/actions';
import { SET_MESSAGE_FRIDGE_NULL } from '../actions/actions';
import { SET_MESSAGE_SEARCHVALUEFRIDGE_NULL } from '../actions/actions';

const initialState = {
    recipesListFridge : [],
    loading: false,
    message: ''
  };
  
  function Reducer(state = initialState, action) {
    switch (action.type) {

      case SET_RECIPES_FRIDGE:
        return {
          ...state,
          recipesListFridge: action.payload,
          loading:false,
          message:'',
        };

      case SET_LOADING_FRIDGE_TRUE:
        return {
          ...state,
          loading: true,
        };

      case SET_MESSAGE_FRIDGE_NULL:
        return {
          ...state,
          message: "Sorry, we didn't find any recipes, write only ingredients in english or try something else.",
          loading:false,
          recipesListFridge: [],
        }
      
      case SET_MESSAGE_SEARCHVALUEFRIDGE_NULL:
      return {
        ...state,
        message: "Before to search, please write something "
      }
        
      default:
        return state;
    }
  }
  
  export default Reducer;