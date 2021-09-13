import React, { useState } from "react";
import Recipes from "./data/recipes.json";

const Recipe = () => {
  const firstRecipe = Recipes[Math.floor(Math.random() * Recipes.length)];
  const [recipe, setRecipe] = useState(firstRecipe);
  let randomRecipe;

  function getRecipe() {
    randomRecipe = Recipes[Math.floor(Math.random() * Recipes.length)];
    setRecipe(randomRecipe);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main>
      <div className="recipe-display" key={recipe.id}>
        <h2>{recipe.title}</h2>
        <div className="info">
          <p>🍴 {recipe.servings}</p>
          <p>🕑 {recipe.cookingTime}</p>
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
        <h3>Gör så här:</h3>
        <ul>
          {recipe.instructions.map((instruction) => (
            <li className="instructions-list">{instruction}</li>
          ))}
        </ul>
      </div>
      <button onClick={getRecipe}>Slumpa recept</button>
    </main>
  );
};

export default Recipe;
