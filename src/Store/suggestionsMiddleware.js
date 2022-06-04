import { FETCH_SUGGESTIONS } from "../actions/actions";
import { requestSuggestions } from "../request/request";
import { actionSetSuggestionsList } from "../actions/actions";
import { actionSetMessageSuggestionsNoResult } from "../actions/actions";

const recipesMiddleware = (store) => (next) => async (action) => {


    if(action.type === FETCH_SUGGESTIONS){

        const searchValue = action.payload
    
        const suggestionsList = await requestSuggestions(searchValue);

        if(suggestionsList){

            if(suggestionsList.length === 0) {

                store.dispatch(actionSetMessageSuggestionsNoResult())
                // a faire
            }
            else{
        
                store.dispatch(
                    actionSetSuggestionsList(suggestionsList),)

            }
        }
        else{
            console.log("fetch error")
            
        }
    }

    next(action)
}
export default recipesMiddleware;