/**
 * @jest-environment jsdom
 */

const { fetchRandomRecipes, fetchSearchByIngredients, fetchSearchById } = require('../script/helpers/requests');
const random = require('../mocks/random');
const byId = require('../mocks/byId');
const byIngredients = require('../mocks/byIngredients')
require('../mocks/mock');
const apiKey = 'apiKey=6ef3298ed7ec43f5878cf082d35cf33f';

describe('Tests fetchRandomRecipes', () => {
  it('expects fetchRandomRecipes to be a function', () => {
    expect(typeof fetchRandomRecipes).toBe('function');
  })
  it('expects fetchRandomRecipes to call fetch', () => {
    fetchRandomRecipes();
    expect(fetch).toHaveBeenCalled();
  })
  it('expects fetchRandomRecipes return to match the object random', async () => {
    const request = await fetchRandomRecipes();
    expect(request).toMatchObject(random);
  })
});

describe('Tests fetchSearchById', () => {
  it('expects fetchSearchById to be a function', () => {
    expect(typeof fetchSearchById).toBe('function');
  });

  it('expects fetchSearchById to call fetch', async () => {
    await fetchSearchById();
    expect(fetch).toHaveBeenCalled();
  });

  it('expects fetch to have been called with the designated url', async () => {
    const url = `https://api.spoonacular.com/recipes/782619/information?includeNutrition=false&${apiKey}`;
    await fetchSearchById('782619');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('expects fetchSearchById return to match the object byId', async () => {
    const response = await fetchSearchById('782619');
    expect(response).toMatchObject(byId);
  });  
});

describe('Tests fetchSearchByIngredients', () => {
  it('expects fetchSearchByIngredients to be a function', () => {
    expect(typeof fetchSearchByIngredients).toBe('function');
  });

  it('expects fetchSearchByIngredients to call fetch', async () => {
    await fetchSearchByIngredients('potato', undefined, undefined, undefined, 'potato');
    expect(fetch).toHaveBeenCalled();
  });

  it('expects fetch to have been called with the designated url', async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=potato&number=9&${apiKey}&addRecipeInformation=true&fillIngredients=true&intolerances=undefined&diet=undefined&excludeIngredients=undefined&query=potato`;
    await fetchSearchByIngredients('potato', undefined, undefined, undefined, 'potato');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('expects fetchSearchByIngredients return to match the object byIngredients', async () => {
    const response = await fetchSearchByIngredients('potato', undefined, undefined, undefined, 'potato');
    expect(response).toMatchObject(byIngredients);
  });  
});