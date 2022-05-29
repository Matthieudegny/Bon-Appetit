export const FETCH_RECIPESLIST = 'FETCH_RECIPESLIST';


export const actionFetchRecipes = (searchValue) => ({
  type: FETCH_RECIPESLIST,
  payload: searchValue
})