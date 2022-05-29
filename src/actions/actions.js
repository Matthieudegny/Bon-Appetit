export const FETCH_RECIPESLIST = 'FETCH_RECIPESLIST';
export const SET_RECIPES = 'SET_RECIPES';

export const actionFetchRecipes = (searchValue) => ({
  type: FETCH_RECIPESLIST,
  payload: searchValue
})

/**
 * Action pour demander aux reducers de sauvegarder le tableau de recette
 * @param {Array<Object>} recipesList tableau de recette
 * @returns {Action}
 */
 export const actionSetRecipesList = (recipesList) => ({
  type: SET_RECIPES,
  payload: recipesList,
});