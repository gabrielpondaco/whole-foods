const apiKey = 'apiKey=b46b8b5b592e44d4a9145e4e94b9ec58';
const searchBtn = document.querySelector(`#button-addon2`);
const input = document.querySelector('#input-text')
const fetchRandomRecipes = async () => {
  const url = `https://api.spoonacular.com/recipes/random?number=9&${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  data.recipes.forEach(element => {
    const { title, image, readyInMinutes, id } = element;
    createCard({ title, image, readyInMinutes, id });
  });
}

const fetchSearchByIngredients = async () => {
  const value = input.value;
  const search = value.split(' ').join(',+');
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=2&${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(element => {
    const { title, image, id } = element;
    createCard({ title, image, id });
  });
}

const fetchSearchById = async (event) => {
  const id = event.target.id
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&${apiKey}`
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

window.onload = () => {
  searchBtn.addEventListener('click', fetchSearchByIngredients);
  // fetchRandomRecipes();
}