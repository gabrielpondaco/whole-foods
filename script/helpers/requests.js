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
  document.querySelector('main').innerHTML = '';
  const querySearch = document.querySelector('#query').value;
  const intolerancesArr = document.querySelectorAll(
    'input[name=intolerances]:checked'
  );
  const intolerances = Array.from(intolerancesArr)
    .map((int) => int.id)
    .join(',');
  const select = document.querySelector('select');
  const diet = select[select.selectedIndex].value;
  const excludeItems = document.querySelector('#excludeIngredients').value;
  const exclude = excludeItems.split(' ').join(',');
  const value = input.value;
  const search = value.split(' ').join(',');
  const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${search}&number=6&${apiKey}&addRecipeInformation=true&fillIngredients=true&intolerances=${intolerances}&diet=${diet}&excludeIngredients=${exclude}&query=${querySearch}`;
  const response = await fetch(url);
  const data = await response.json();
  data.results.forEach((element) => {
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
