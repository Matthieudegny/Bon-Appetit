import { SET_SUGGESTIONS } from '../actions/actions';
import { SET_LOADING_SUGGESTIONS_TRUE } from '../actions/actions';

const initialState = {
 suggestions:[],
 loading:false,
};

function suggestionsReducer(state = initialState, action) {
    switch (action.type) {

        case SET_SUGGESTIONS:
          return {
            ...state,
            suggestions: action.payload,
            loading:false
          };
         case SET_LOADING_SUGGESTIONS_TRUE:
           return {
             ...state,
            loading:true
           }

        default:
        return state;
    }
}
export default suggestionsReducer