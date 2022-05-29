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
           console.log(recipesList)
            if(recipesList.status === 200){
                store.dispatch(
                    actionSetRecipesList(recipesList.data.results)
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