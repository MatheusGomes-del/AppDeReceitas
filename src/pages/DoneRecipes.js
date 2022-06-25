import React, { useEffect, useState } from 'react';
import DoneRecipeCard from './components/DoneRecipeCard';
import Header from './components/Header';

export default function DoneRecipes() {
  const [recipesDone, setRecipesDone] = useState([]);

  useEffect(() => {
    function getRecipesDone() {
      const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
      setRecipesDone(recipes);
      console.log(recipes);
    }
    getRecipesDone();
  }, []);

  const filterFoods = () => {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const foodList = recipes.filter(({ type }) => type === 'food');
    setRecipesDone(foodList);
  };

  const filterDrinks = () => {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const drinkList = recipes.filter(({ type }) => type === 'drink');
    setRecipesDone(drinkList);
  };

  const returnAllDones = () => {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setRecipesDone(recipes);
  };

  return (
    <>
      <Header title="Done Recipes" />
      <div>
        <section>
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ returnAllDones }
          >
            all
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ filterFoods }

          >
            food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ filterDrinks }
          >
            drink
          </button>
          {
            recipesDone.map((recipe, index) => (
              <DoneRecipeCard
                key={ index }
                index={ index }
                recipe={ recipe }
                setList={ setRecipesDone }
              />
            ))
          }

        </section>
      </div>
    </>
  );
}
