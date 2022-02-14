const apiKey = 'apiKey=6ef3298ed7ec43f5878cf082d35cf33f';


const fetchRandomRecipes = async () => {
  try {
    const url = `https://api.spoonacular.com/recipes/random?number=9&${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }

};

const fetchSearchByIngredients = async (search, intolerances, diet, exclude, querySearch) => {
  try {
    const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${search}&number=9&${apiKey}&addRecipeInformation=true&fillIngredients=true&intolerances=${intolerances}&diet=${diet}&excludeIngredients=${exclude}&query=${querySearch}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

const fetchSearchById = async (id) => {
  try {    
    const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

module.exports = {
  fetchRandomRecipes,
  fetchSearchById,
  fetchSearchByIngredients
}