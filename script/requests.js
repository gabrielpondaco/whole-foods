const apiKey = 'apiKey=b46b8b5b592e44d4a9145e4e94b9ec58';

const fetchRecipes = async () => {
  const url = `https://api.spoonacular.com/recipes/random?number=9&${apiKey}`
  const response = await fetch(url);
  const data = await response.json();
  
  data.recipes.forEach(element => {
    const { title, image, readyInMinutes, id } = element;
    createCard({ title, image, readyInMinutes, id });
  });
}

fetchRecipes();