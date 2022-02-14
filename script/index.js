let modal = new bootstrap.Modal(document.getElementById('seeDetailsModal'))
const input = document.querySelector('#includeIngredients');
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

const randomRecipes = async () => {
  const data = await fetchRandomRecipes();
  data.recipes.forEach((element) => {
    const { title, image, readyInMinutes, id } = element;
    createCard({ title, image, readyInMinutes, id });
  });
}

const searchByIngredients = async () => {
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
  const data = await fetchSearchByIngredients(search, intolerances, diet, exclude, querySearch);
  data.results.forEach((element) => {
    createCard(element);
  });
}

window.onload = () => {
  searchBtn.addEventListener('click', searchByIngredients);
  form.addEventListener('submit', (e) => e.preventDefault());
  randomRecipes();
};
