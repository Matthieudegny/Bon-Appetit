import { FETCH_RECIPESLIST } from "../actions/actions";
import { requestsRecipe } from "../request/request";

const recipesMiddleware = (store) => (next) => async (action) => {
    if(action.type === FETCH_RECIPESLIST){
        console.log("fetch recipes list")
        console.log(`test console payload ${action.payload}`)
        const searchValue = action.payload

        try{
            console.log("fetch gone")
            const result = await requestsRecipe(searchValue);
            console.log(result)
        }
        catch(err) {
            console.log(err)
            
        }

        return;
    }
    next(action)
}

export default recipesMiddleware;