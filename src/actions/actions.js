export const FETCH_RECIPESLIST = 'FETCH_RECIPESLIST';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_LOADING_TRUE = 'SET_LOADING_TRUE'
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE'
export const SET_MESSAGE_NULL = 'SET_MESSAGE_NULL'

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

export const actionLoadingTrue = () => ({
  type: SET_LOADING_TRUE,
});

export const actionLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
});

export const actionSetMessageNoResult = () => ({
  type : SET_MESSAGE_NULL
});
