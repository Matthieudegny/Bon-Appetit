import { FETCH_RECIPESLIST } from "../actions/actions";
import { requestsRecipe } from "../request/request";
import { actionSetRecipesList } from "../actions/actions";

const recipesMiddleware = (store) => (next) => async (action) => {
    if(action.type === FETCH_RECIPESLIST){
        console.log("fetch recipes list")
        console.log(`test console payload ${action.payload}`)
        const searchValue = action.payload

        try{
            console.log("fetch gone")
            const recipesList = await requestsRecipe(searchValue);
           
            if(recipesList){
                store.dispatch(
                    actionSetRecipesList(recipesList)
                )
            }
            else{
                console.log("erreur avec la requête")
                //trouver quelqeu chose à renvoyer ici pour afficher erreur
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