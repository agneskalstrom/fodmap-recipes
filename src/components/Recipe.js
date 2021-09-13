import React, { useState } from "react";
import Recipes from "./data/recipes.json";

const Recipe = () => {
  const firstRecipe = Recipes[Math.floor(Math.random() * Recipes.length)];
  const [recipe, setRecipe] = useState(firstRecipe);
  console.log(Recipes);

  let randomRecipe;

  function getRecipe() {
    randomRecipe = Recipes[Math.floor(Math.random() * Recipes.length)];
    setRecipe(randomRecipe);
    console.log(randomRecipe);
  }

  return (
    <main>
      <button onClick={getRecipe}>Nytt recept</button>
      <div className="recipe-display" key={recipe.id}>
        <h2>{recipe.title}</h2>
        <div className="info">
          <p>{recipe.servings}</p>
          <p>{recipe.cookingTime}</p>
        </div>
        <h3>Ingredienser:</h3>
        {recipe.ingredients.map((ingredients) => {
          return (
            <div className="ingredients">
              <h4>{ingredients.subTitle}</h4>
              <ul>
                {ingredients.subIngredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
          );
        })}
        <h3>Instruktioner:</h3>
        <ul>
          {recipe.instructions.map((instruction) => (
            <li>{instruction}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Recipe;
