const apiKey = 'apiKey=e21a60bee8724db4a1ac8c2f675c4ba0';
const input = document.querySelector('#includeIngredients');

const fetchRandomRecipes = async () => {
  const url = `https://api.spoonacular.com/recipes/random?number=9&${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  data.recipes.forEach((element) => {
    const { title, image, readyInMinutes, id } = element;
    createCard({ title, image, readyInMinutes, id });
  });
};

const fetchSearchByIngredients = async () => {
  const value = input.value;
  const search = value.split(' ').join(',+');
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=2&${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((element) => {
    const { title, image, id } = element;
    createCard({ title, image, id });
  });
};

const fetchSearchById = async (id) => {
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
