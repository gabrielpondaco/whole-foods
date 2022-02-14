// 20220214103651
// https://api.spoonacular.com/recipes/782619/information?includeNutrition=false&apiKey=b46b8b5b592e44d4a9145e4e94b9ec58//

const byId = {
  "vegetarian": true,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": false,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "weightWatcherSmartPoints": 24,
  "gaps": "no",
  "lowFodmap": false,
  "aggregateLikes": 135,
  "spoonacularScore": 94.0,
  "healthScore": 38.0,
  "creditsText": "Full Belly Sisters",
  "license": "CC BY-SA 3.0",
  "sourceName": "Full Belly Sisters",
  "pricePerServing": 468.61,
  "extendedIngredients": [
    {
      "id": 10018029,
      "aisle": "Bakery/Bread",
      "image": "crusty-bread.jpg",
      "consistency": "solid",
      "name": "crusty bread",
      "nameClean": "crusty bread",
      "original": "4 slices of crusty bread",
      "originalName": "crusty bread",
      "amount": 4.0,
      "unit": "slices",
      "meta": [
        
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "slice",
          "unitLong": "slices"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "slice",
          "unitLong": "slices"
        }
      }
    },
    {
      "id": 1123,
      "aisle": "Milk, Eggs, Other Dairy",
      "image": "egg.png",
      "consistency": "solid",
      "name": "eggs",
      "nameClean": "egg",
      "original": "4 large eggs",
      "originalName": "eggs",
      "amount": 4.0,
      "unit": "large",
      "meta": [
        
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "large",
          "unitLong": "larges"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "large",
          "unitLong": "larges"
        }
      }
    },
    {
      "id": 11215,
      "aisle": "Produce",
      "image": "garlic.png",
      "consistency": "solid",
      "name": "garlic clove",
      "nameClean": "garlic",
      "original": "1 garlic clove, cut in half",
      "originalName": "garlic clove, cut in half",
      "amount": 1.0,
      "unit": "",
      "meta": [
        "cut in half"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 93632,
      "aisle": "Ethnic Foods",
      "image": "ghee.jpg",
      "consistency": "solid",
      "name": "ghee",
      "nameClean": "clarified butter",
      "original": "1 Tablespoon ghee or butter, divided",
      "originalName": "ghee or butter, divided",
      "amount": 1.0,
      "unit": "Tablespoon",
      "meta": [
        "divided"
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "Tbsp",
          "unitLong": "Tbsp"
        }
      }
    },
    {
      "id": 1159,
      "aisle": "Cheese",
      "image": "goat-cheese.jpg",
      "consistency": "solid",
      "name": "goat cheese",
      "nameClean": "goat cheese",
      "original": "2 ounces goat cheese, crumbled",
      "originalName": "goat cheese, crumbled",
      "amount": 2.0,
      "unit": "ounces",
      "meta": [
        "crumbled"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 56.699,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1012042,
      "aisle": "Produce;Spices and Seasonings",
      "image": "dried-herbs.png",
      "consistency": "solid",
      "name": "herbes de provence",
      "nameClean": "herbes de provence",
      "original": "1 teaspoon herbes de Provence",
      "originalName": "herbes de Provence",
      "amount": 1.0,
      "unit": "teaspoon",
      "meta": [
        
      ],
      "measures": {
        "us": {
          "amount": 1.0,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        },
        "metric": {
          "amount": 1.0,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        }
      }
    },
    {
      "id": 11260,
      "aisle": "Produce",
      "image": "mushrooms.png",
      "consistency": "solid",
      "name": "mushrooms",
      "nameClean": "fresh mushrooms",
      "original": "16 ounces sliced mushrooms",
      "originalName": "sliced mushrooms",
      "amount": 16.0,
      "unit": "ounces",
      "meta": [
        "sliced"
      ],
      "measures": {
        "us": {
          "amount": 16.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 453.592,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 1102047,
      "aisle": "Spices and Seasonings",
      "image": "salt-and-pepper.jpg",
      "consistency": "solid",
      "name": "salt and pepper",
      "nameClean": "salt and pepper",
      "original": "salt and pepper, to taste",
      "originalName": "salt and pepper, to taste",
      "amount": 2.0,
      "unit": "servings",
      "meta": [
        "to taste"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "servings",
          "unitLong": "servings"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "servings",
          "unitLong": "servings"
        }
      }
    },
    {
      "id": 11677,
      "aisle": "Produce",
      "image": "shallots.jpg",
      "consistency": "solid",
      "name": "shallots",
      "nameClean": "shallot",
      "original": "4 large shallots, sliced",
      "originalName": "shallots, sliced",
      "amount": 4.0,
      "unit": "large",
      "meta": [
        "sliced"
      ],
      "measures": {
        "us": {
          "amount": 4.0,
          "unitShort": "large",
          "unitLong": "larges"
        },
        "metric": {
          "amount": 4.0,
          "unitShort": "large",
          "unitLong": "larges"
        }
      }
    }
  ],
  "id": 782619,
  "title": "Mushroom Goat Cheese Baked Eggs",
  "readyInMinutes": 45,
  "servings": 2,
  "sourceUrl": "http://fullbellysisters.blogspot.com/2016/04/mushroom-goat-cheese-baked-eggs.html",
  "image": "https://spoonacular.com/recipeImages/782619-556x370.png",
  "imageType": "png",
  "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your collection, Mushroom Goat Cheese Baked Eggs might be a recipe you should try. This recipe makes 2 servings with <b>726 calories</b>, <b>40g of protein</b>, and <b>25g of fat</b> each. For <b>$4.55 per serving</b>, this recipe <b>covers 40%</b> of your daily requirements of vitamins and minerals. It works well as a rather expensive main course. A mixture of shallots, eggs, goat cheese, and a handful of other ingredients are all it takes to make this recipe so delicious. 136 people found this recipe to be tasty and satisfying. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 93%</b>, which is great. <a href=\"https://spoonacular.com/recipes/mushroom-spinach-and-goat-cheese-baked-eggs-625772\">Mushroom Spinach and Goat Cheese Baked Eggs</a>, <a href=\"https://spoonacular.com/recipes/easy-mushroom-and-goats-cheese-scrambled-eggs-717278\">Easy mushroom and goat's cheese scrambled eggs</a>, and <a href=\"https://spoonacular.com/recipes/make-your-own-goat-cheese-for-goat-cheese-sausage-and-mushroom-wellington-or-pizza-522380\">Make Your Own Goat Cheese for Goat Cheese, Sausage and Mushroom Wellington (or Pizza!)</a> are very similar to this recipe.",
  "cuisines": [
    
  ],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [
    "lacto ovo vegetarian"
  ],
  "occasions": [
    
  ],
  "winePairing": {
    
  },
  "instructions": "<ol><li><span></span>Preheat oven to 350 degrees. Place a large skillet over medium heat; add two teaspoons of ghee or butter and let it melt. Sauté the shallots until they begin to lightly caramelize. Stir in the mushrooms, as well as some salt and pepper, and sauté until the mushrooms release their juices and turn golden brown.</li><li>Place a teaspoon of ghee in a pie plate or casserole dish; heat in the oven for about two minutes, or until the ghee is softened. Using a pastry brush, spread the melted ghee all around the inside of the baking dish. Add the mushroom and shallot mixture, then top with the crumbled goat cheese.</li><li>Using the back of a spoon, make four indentations in the mushroom mixture. Carefully crack an egg into each indentation. Top with salt, pepper, and herbes de Provence.</li><li>Bake for 18 to 23 minutes or until desired doneness. The whites should be cooked through but the yolks still soft. While the eggs are baking, toast the bread. Gently rub the toast with the cut side of the garlic clove until the bread is fragrant.</li><li>Remove the eggs from the oven. Top with fresh herbs or greens (I used baby arugula, but chopped chives would be fabulous, too) and serve with toast.</li></ol>",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Preheat oven to 350 degrees.",
          "ingredients": [
            
          ],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ]
        },
        {
          "number": 2,
          "step": "Place a large skillet over medium heat; add two teaspoons of ghee or butter and let it melt. Sauté the shallots until they begin to lightly caramelize. Stir in the mushrooms, as well as some salt and pepper, and sauté until the mushrooms release their juices and turn golden brown.",
          "ingredients": [
            {
              "id": 1102047,
              "name": "salt and pepper",
              "localizedName": "salt and pepper",
              "image": "salt-and-pepper.jpg"
            },
            {
              "id": 11260,
              "name": "mushrooms",
              "localizedName": "mushrooms",
              "image": "mushrooms.png"
            },
            {
              "id": 11677,
              "name": "shallot",
              "localizedName": "shallot",
              "image": "shallots.jpg"
            },
            {
              "id": 1001,
              "name": "butter",
              "localizedName": "butter",
              "image": "butter-sliced.jpg"
            },
            {
              "id": 93632,
              "name": "ghee",
              "localizedName": "ghee",
              "image": "ghee.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404645,
              "name": "frying pan",
              "localizedName": "frying pan",
              "image": "pan.png"
            }
          ]
        },
        {
          "number": 3,
          "step": "Place a teaspoon of ghee in a pie plate or casserole dish; heat in the oven for about two minutes, or until the ghee is softened. Using a pastry brush, spread the melted ghee all around the inside of the baking dish.",
          "ingredients": [
            {
              "id": 0,
              "name": "spread",
              "localizedName": "spread",
              "image": ""
            },
            {
              "id": 93632,
              "name": "ghee",
              "localizedName": "ghee",
              "image": "ghee.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404635,
              "name": "casserole dish",
              "localizedName": "casserole dish",
              "image": "casserole-dish.png"
            },
            {
              "id": 404764,
              "name": "pastry brush",
              "localizedName": "pastry brush",
              "image": "pastry-brush.jpg"
            },
            {
              "id": 404646,
              "name": "baking pan",
              "localizedName": "baking pan",
              "image": "roasting-pan.jpg"
            },
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ],
          "length": {
            "number": 2,
            "unit": "minutes"
          }
        },
        {
          "number": 4,
          "step": "Add the mushroom and shallot mixture, then top with the crumbled goat cheese.Using the back of a spoon, make four indentations in the mushroom mixture. Carefully crack an egg into each indentation. Top with salt, pepper, and herbes de Provence.",
          "ingredients": [
            {
              "id": 1012042,
              "name": "herbes de provence",
              "localizedName": "herbes de provence",
              "image": "dried-herbs.png"
            },
            {
              "id": 1159,
              "name": "goat cheese",
              "localizedName": "goat cheese",
              "image": "goat-cheese.jpg"
            },
            {
              "id": 11260,
              "name": "mushrooms",
              "localizedName": "mushrooms",
              "image": "mushrooms.png"
            },
            {
              "id": 11677,
              "name": "shallot",
              "localizedName": "shallot",
              "image": "shallots.jpg"
            },
            {
              "id": 1002030,
              "name": "pepper",
              "localizedName": "pepper",
              "image": "pepper.jpg"
            },
            {
              "id": 2047,
              "name": "salt",
              "localizedName": "salt",
              "image": "salt.jpg"
            },
            {
              "id": 1123,
              "name": "egg",
              "localizedName": "egg",
              "image": "egg.png"
            }
          ],
          "equipment": [
            
          ]
        },
        {
          "number": 5,
          "step": "Bake for 18 to 23 minutes or until desired doneness. The whites should be cooked through but the yolks still soft. While the eggs are baking, toast the bread. Gently rub the toast with the cut side of the garlic clove until the bread is fragrant.",
          "ingredients": [
            {
              "id": 10211215,
              "name": "whole garlic cloves",
              "localizedName": "whole garlic cloves",
              "image": "garlic.jpg"
            },
            {
              "id": 18064,
              "name": "bread",
              "localizedName": "bread",
              "image": "white-bread.jpg"
            },
            {
              "id": 18070,
              "name": "toast",
              "localizedName": "toast",
              "image": "toast"
            },
            {
              "id": 1125,
              "name": "egg yolk",
              "localizedName": "egg yolk",
              "image": "egg-yolk.jpg"
            },
            {
              "id": 1123,
              "name": "egg",
              "localizedName": "egg",
              "image": "egg.png"
            },
            {
              "id": 1012034,
              "name": "dry seasoning rub",
              "localizedName": "dry seasoning rub",
              "image": "seasoning.png"
            }
          ],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ],
          "length": {
            "number": 18,
            "unit": "minutes"
          }
        },
        {
          "number": 6,
          "step": "Remove the eggs from the oven. Top with fresh herbs or greens (I used baby arugula, but chopped chives would be fabulous, too) and serve with toast.",
          "ingredients": [
            {
              "id": 10011959,
              "name": "baby arugula",
              "localizedName": "baby arugula",
              "image": "arugula-or-rocket-salad.jpg"
            },
            {
              "id": 10111297,
              "name": "fresh herbs",
              "localizedName": "fresh herbs",
              "image": "mixed-fresh-herbs.jpg"
            },
            {
              "id": 11156,
              "name": "chives",
              "localizedName": "chives",
              "image": "fresh-chives.jpg"
            },
            {
              "id": 21052,
              "name": "greens",
              "localizedName": "greens",
              "image": "mixed-greens-or-mesclun.jpg"
            },
            {
              "id": 18070,
              "name": "toast",
              "localizedName": "toast",
              "image": "toast"
            },
            {
              "id": 1123,
              "name": "egg",
              "localizedName": "egg",
              "image": "egg.png"
            }
          ],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ]
        }
      ]
    }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/mushroom-goat-cheese-baked-eggs-782619"
}

module.exports = byId;