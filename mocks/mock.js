const byId = require('./byId');
const byIngredients = require('./byIngredients');
const random = require('./random');
const apiKey = 'apiKey=6ef3298ed7ec43f5878cf082d35cf33f'

const ENDPOINTS = {
  RANDOM: `https://api.spoonacular.com/recipes/random?number=9&${apiKey}`,
  ID: `https://api.spoonacular.com/recipes/782619/information?includeNutrition=false&${apiKey}`,
  INGREDIENTS: `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=potato&number=9&${apiKey}&addRecipeInformation=true&fillIngredients=true&intolerances=undefined&diet=undefined&excludeIngredients=undefined&query=potato`,
};

const TIME_IN_MILLISECONDS = 200;

const fetchSimulator = (url) => {
  const validUrl = Object.values(ENDPOINTS).includes(url);
  return Promise.resolve({
    status: validUrl ? 200 : 404,
    ok: validUrl,
    json: () => new Promise((resolve) => {
      setTimeout(() => {
        if (url === ENDPOINTS.RANDOM) {
          return resolve(random);
        }

        if (url === ENDPOINTS.ID) {
          return resolve(byId);
        }

        if (url === ENDPOINTS.INGREDIENTS) {
          return resolve(byIngredients);
        }

        return resolve({ results: [] });
      }, TIME_IN_MILLISECONDS);
    }),
  });
};

window.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);

module.exports = fetchSimulator;