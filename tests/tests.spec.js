/**
 * @jest-environment jsdom
 */

const { fetchRandomRecipes, fetchSearchByIngredients, fetchSearchById } = require('../script/helpers/requests');
const random = require('../mocks/random');
const byId = require('../mocks/byId');
const byIngredients = require('../mocks/byIngredients')
require('../mocks/mock');
const apiKey = 'apiKey=eba159da66b949238f0ade30045e157f';

describe('Tests fetchRandomRecipes', () => {
  it('expects fetchRandomRecipes to be a function', () => {
    expect(typeof fetchRandomRecipes).toBe('function');
  })
  it('expects fetchRandomRecipes to call fetch', () => {
    fetchRandomRecipes();
    expect(fetch).toHaveBeenCalled();
  })
  it('expects fetchRandomRecipes to equal "random"', async () => {
    const request = await fetchRandomRecipes();
    expect(request).toEqual(random);
  })
});

describe('Tests fetchSearchById', () => {
  it('verifies if fetchSearchById is a function', () => {
    expect(typeof fetchSearchById).toBe('function');
  });

  it('expects fetchSearchById to call fetch', async () => {
    await fetchSearchById();
    expect(fetch).toHaveBeenCalled();
  });

  it('verifica se fetch foi chamada com a url esperada', async () => {
    const url = `https://api.spoonacular.com/recipes/782619/information?includeNutrition=false&${apiKey}`;
    await fetchSearchById('782619');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('verifica se o retorno da função fetchSearchById(""), é uma estrutura de dados igual ao objeto byId', async () => {
    const response = await fetchSearchById('782619');
    expect(response).toMatchObject(byId);
  });  
});

describe('1 - Teste a função fetchSearchByIngredients', () => {
  it('verifica se fetchSearchByIngredients() é uma função', () => {
    expect(typeof fetchSearchByIngredients).toBe('function');
  });

  it('verifica se fetch foi chamada ao executar fetchSearchByIngredients(``)', async () => {
    await fetchSearchByIngredients('potato', undefined, undefined, undefined, 'potato');
    expect(fetch).toHaveBeenCalled();
  });

  it('verifica se fetch foi chamada com a url esperada', async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=potato&number=9&${apiKey}&addRecipeInformation=true&fillIngredients=true&intolerances=undefined&diet=undefined&excludeIngredients=undefined&query=potato`;
    await fetchSearchByIngredients('potato', undefined, undefined, undefined, 'potato');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('verifica se o retorno da função fetchSearchByIngredients(""), é uma estrutura de dados igual ao objeto byIngredients', async () => {
    const response = await fetchSearchByIngredients('potato', undefined, undefined, undefined, 'potato');
    expect(response).toMatchObject(byIngredients);
  });  
});