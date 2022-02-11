window.onload = () => {
  searchBtn.addEventListener('click', fetchSearchByIngredients);
  form.addEventListener('submit', (e) => e.preventDefault());
  fetchRandomRecipes();
};
