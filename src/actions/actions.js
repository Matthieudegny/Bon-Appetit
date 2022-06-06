//RECIPES
export const FETCH_RECIPESLIST = 'FETCH_RECIPESLIST';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_LOADING_TRUE = 'SET_LOADING_TRUE'
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE'
export const SET_MESSAGE_NULL = 'SET_MESSAGE_NULL'
export const SET_MESSAGE_SEARCHVALUE_NULL = "SET_MESSAGE_SEARCHVALUE_NULL"
//SUGGESTIONS
export const FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS'
export const SET_SUGGESTIONS = 'SET_SUGGESTIONS'
export const SET_MESSAGE_SUGGESTIONS_NULL = 'SET_MESSAGE_SUGGESTIONS_NULL'
export const SET_LOADING_SUGGESTIONS_TRUE = 'SET_LOADING_SUGGESTIONS_TRUE'
//FRIDGE
export const SET_LOADING_FRIDGE_TRUE = 'SET_LOADING_FRIDGE_TRUE'
export const FETCH_RECIPESLIST_FRIDGE = 'FETCH_RECIPESLIST_FRIDGE'
export const SET_MESSAGE_FRIDGE_NULL = 'SET_MESSAGE_FRIDGE_NULL'
export const SET_RECIPES_FRIDGE = 'SET_RECIPES_FRIDGE'
export const SET_MESSAGE_SEARCHVALUEFRIDGE_NULL = "SET_MESSAGE_SEARCHVALUEFRIDGE_NULL"


//RECIPES

export const actionFetchRecipes = (searchValue) => ({
  type: FETCH_RECIPESLIST,
  payload: searchValue
})

export const actionSetRecipesList = (recipesList) => ({
  type: SET_RECIPES,
  payload: recipesList,
});

export const actionLoadingTrue = () => ({
  type: SET_LOADING_TRUE,
});

export const actionSetMessageNoResult = () => ({
  type : SET_MESSAGE_NULL
});

export  const actionSearchValueNull = () => ({
  type: SET_MESSAGE_SEARCHVALUE_NULL
})


//SUGGESTIONS

export const actionFetchSuggestions = (valueSelected) => ({
  type: FETCH_SUGGESTIONS,
  payload: valueSelected,
});

export const actionSetSuggestionsList = (suggestionsList) => ({
  type: SET_SUGGESTIONS,
  payload: suggestionsList
})

export const actionSetMessageSuggestionsNoResult = () => ({
  type: SET_MESSAGE_SUGGESTIONS_NULL
})

export const actionLoadingSuggestionsTrue = () => ({
  type: SET_LOADING_SUGGESTIONS_TRUE
})

//FRIDGE

export const actionLoadingFridgeTrue = () => ({
  type: SET_LOADING_FRIDGE_TRUE
})

export const actionFetchRecipesFridge = (listFridgetoFetch) => ({
  type: FETCH_RECIPESLIST_FRIDGE,
  payload: listFridgetoFetch
})

export const actionSetMessageNoResultFridge = () => ({
  type: SET_MESSAGE_FRIDGE_NULL,
})

export const actionSetRecipesListFridge = (recipesListFridge) => ({
  type: SET_RECIPES_FRIDGE,
  payload: recipesListFridge,
})

export  const actionSearchValueFridgeNull = () => ({
  type: SET_MESSAGE_SEARCHVALUEFRIDGE_NULL
})





