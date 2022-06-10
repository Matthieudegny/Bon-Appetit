import axios from 'axios';

export async function requestsRecipe(searchValue) {
    try {
      const APIKEY = "9aaebbeca05644af8ed5cc2c16e4508e";

      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&number=5&apiKey=${APIKEY}`);
    
      if(response.status===402){

      }
      const recipes = response.data.results
      let recipesList = [];

      for(const recipe of recipes){
        const response2 = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=true&apiKey=${APIKEY}`);
        //attention response2.data.instructions peut être null, sans recette
        recipesList.push(response2)
      }      
      return recipesList
      
    }
    catch (err) {
      console.error(err);
      throw err;
    }

}

export async function requestSuggestions(searchValue) {

  try{
    const APIKEY = "9aaebbeca05644af8ed5cc2c16e4508e";
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=5&tags=${searchValue}&apiKey=${APIKEY}`);

    const suggestionsList = response.data.recipes

    return suggestionsList
  }
  catch(err){

  }
}

export async function requestsRecipeFridge(searchValue) {

  try{
    const APIKEY = "9aaebbeca05644af8ed5cc2c16e4508e";
  
    const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchValue}&number=5&apiKey=${APIKEY}`);

    const fridgeList = response.data

    let recipesFridgeList = [];

      for(const recipe of fridgeList){
        const response2 = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=true&apiKey=${APIKEY}`);
        //attention response2.data.instructions peut être null, sans recette
        recipesFridgeList.push(response2)
      }      
    
    return recipesFridgeList
  }
  catch(err){

  }
}
//https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${APIKEY}
//https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&apiKey=${APIKEY}

//https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies
//recette par nom
//https://api.spoonacular.com/recipes/extract?url=https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies
//Autocomplete Recipe Search
//https://api.spoonacular.com/recipes/autocomplete?number=10&query=chick

//recette par "search recipes"
//https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=4&apiKey=${APIKEY}
//Proposez d'avoir les instructions -> recherche recette avec id
//https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=${APIKEY}

//recette par repas breakfast, lunch, entree, dessert...(main course, main dish, dinner)
//https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert

//recette par ingrédient partie fridge
//https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken&number=5&apiKey=${APIKEY}
//https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2