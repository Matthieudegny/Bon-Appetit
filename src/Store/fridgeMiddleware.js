import { FETCH_RECIPESLIST_FRIDGE } from "../actions/actions";
import { requestsRecipeFridge } from "../request/request";
import { actionSetRecipesListFridge } from "../actions/actions";
import { actionSetMessageNoResultFridge } from "../actions/actions";


const FridgeMiddleware = (store) => (next) => async (action) => {
    if(action.type === FETCH_RECIPESLIST_FRIDGE){

        const searchValue = action.payload
        console.log(searchValue)

        try{

            console.log("fetch gone")
            const recipesListFridge = await requestsRecipeFridge(searchValue);

            if(recipesListFridge){

                if(recipesListFridge.length === 0) {

                    store.dispatch(actionSetMessageNoResultFridge())

                }
                else{

                    store.dispatch(
                        actionSetRecipesListFridge(recipesListFridge),)

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

export default FridgeMiddleware;