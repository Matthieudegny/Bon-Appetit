import { FETCH_RECIPESLIST } from "../actions/actions";
import { requestsRecipe } from "../request/request";
import { actionSetRecipesList } from "../actions/actions";
import { actionSetMessageNoResult } from "../actions/actions";


const recipesMiddleware = (store) => (next) => async (action) => {
    if(action.type === FETCH_RECIPESLIST){

        const searchValue = action.payload

        try{

            console.log("fetch gone")
            const recipesList = await requestsRecipe(searchValue);

            if(recipesList){

                if(recipesList.length === 0) {

                    store.dispatch(actionSetMessageNoResult())

                }
                else{

                    store.dispatch(
                        actionSetRecipesList(recipesList),)

                }
            }
            else{
                console.log("fetch error")
                
            }
        }
        catch(err) {
            console.log(err)
            
        }

        return;
    }
    next(action)
}

export default recipesMiddleware;