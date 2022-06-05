import { SET_RECIPES_FRIDGE } from '../actions/actions';
import { SET_LOADING_FRIDGE_TRUE } from '../actions/actions';
import { SET_MESSAGE_FRIDGE_NULL } from '../actions/actions';

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
          message: "Sorry, we didn't find any recipes, whrite something else, if you don't know the exact name of your recipe, \
           just write the main ingredient, for exemple chicken, salmon, salad...",
          loading:false,
          recipesListFridge: [],
        }
        
      default:
        return state;
    }
  }
  
  export default Reducer;