const apiKey = 'apiKey=eba159da66b949238f0ade30045e157f';


const fetchRandomRecipes = async () => {
  const url = `https://api.spoonacular.com/recipes/random?number=9&${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchSearchByIngredients = async (search, intolerances, diet, exclude, querySearch) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${search}&number=9&${apiKey}&addRecipeInformation=true&fillIngredients=true&intolerances=${intolerances}&diet=${diet}&excludeIngredients=${exclude}&query=${querySearch}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
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