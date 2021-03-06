import React, { useState } from "react";
import Recipes from "./data/recipes.json";
import cutlery from "../images/assets/cutlery.svg";
import timer from "../images/assets/timer.svg";

const Recipe = () => {
  const firstRecipe = Recipes[Math.floor(Math.random() * Recipes.length)];
  const [recipe, setRecipe] = useState(firstRecipe);
  let randomRecipe;

  function getRecipe() {
    randomRecipe = Recipes[Math.floor(Math.random() * Recipes.length)];
    setRecipe(randomRecipe);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section>
      <div className="app-wrapper" key={recipe.id}>
        <div className="image">
          <img src={recipe.img} alt={recipe.title} />
        </div>
        <div className="recipe-container">
          <h2>{recipe.title}</h2>
          <div className="info">
            <span className="info-row">
              <img src={cutlery} alt="Ikon föreställande bestick" /> <span>{recipe.servings}</span>
            </span>
            <span className="info-row">
              <img src={timer} alt="Ikon föreställande en timer" /> <span>{recipe.cookingTime}</span>
            </span>
          </div>
          <div className="ingredients">
            <h3>Ingredienser</h3>
            {recipe.ingredients.map((ingredients) => {
              return (
                <>
                  <h4 className="sub-ingredients">{ingredients.subTitle}</h4>
                  <ul className="ingredients-list">
                    {ingredients.subIngredients.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
                </>
              );
            })}
          </div>
          <div className="instructions">
            <h3>Gör så här</h3>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction) => (
                <li>{instruction}</li>
              ))}
            </ol>
          </div>
          <div className="recipe-button">
            <button onClick={getRecipe}>Slumpa recept</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
