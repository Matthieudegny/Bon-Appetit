import axios from 'axios';

export async function requestsRecipe(searchValue) {
    try {
        const APIKEY = "9aaebbeca05644af8ed5cc2c16e4508e";
      //https://docs.github.com/en/rest/search#search-repositories
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=4&apiKey=${APIKEY}`);
      const response2 = await axios.get(`https://api.spoonacular.com/recipes/654959/information?includeNutrition=false&apiKey=${APIKEY}`);
      console.log(response, response2);
      return response
    }
    catch (err) {
      console.error(err);
      throw err;
    }

  }

//https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${APIKEY}
//https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&apiKey=${APIKEY}

//https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies
//recette par nom
//https://api.spoonacular.com/recipes/extract?url=https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies

//recette par "search recipes"
//https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=4&apiKey=${APIKEY}
//Proposez d'avoir les instructions -> recherche recette avec id
//https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=${APIKEY}

//recette par repas breakfast, lunch, entree, dessert...(main course, main dish, dinner)
//https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert

//recette par ingrédient partie fridge
//https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken&number=5&apiKey=${APIKEY}
