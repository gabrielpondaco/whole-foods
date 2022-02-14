var modal = new bootstrap.Modal(document.getElementById('seeDetailsModal'))

async function seeDetails(id){
  modal.toggle()
  const recipe = await fetchSearchById(id);
  const {sourceUrl, cheap, dairyFree, glutenFree, vegan, vegetarian, extendedIngredients, title} = recipe;
  const body = modal._element.querySelector('.modal-body')
  body.innerHTML = `
    <h3 id='recipe-name'>Loading...</h3>
    <p>Ingredients</p>
  `
  document.querySelector('#recipe-name').innerText = title

  //Ingredients
  const ul = document.createElement('ul');
  extendedIngredients.forEach(ingredient => {
    ul.appendChild(createIngredientItem(ingredient))
  })
  body.appendChild(ul);
  
  // Details
  createDetailItem('Cheap?', cheap ? 'yes' : 'no', body);
  createDetailItem('Dairy free?', dairyFree ? 'yes' : 'no', body);
  createDetailItem('Gluten free?', glutenFree ? 'yes' : 'no', body);
  createDetailItem('Vegan?', vegan ? 'yes' : 'no', body);
  createDetailItem('Vegetarian?', vegetarian ? 'yes' : 'no', body);

  // Source redirect
  document.querySelector('#recipe-source').href = sourceUrl;
}

window.onload = () => {
  searchBtn.addEventListener('click', fetchSearchByIngredients);
  form.addEventListener('submit', (e) => e.preventDefault());
  fetchRandomRecipes();
};
