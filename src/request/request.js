import axios from 'axios';

export async function requestsRecipe(searchValue) {
    try {
        const APIKEY = "9aaebbeca05644af8ed5cc2c16e4508e";
      //https://docs.github.com/en/rest/search#search-repositories
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&apiKey=${APIKEY}`);
      console.log(response);
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  }

//https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${APIKEY}
//https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&apiKey=${APIKEY}
//https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken&apiKey=${APIKEY}