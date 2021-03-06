import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ExploreFoodS from './styled';

export default function ExploreFood() {
  const history = useHistory();

  const onSurpriseMe = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const { meals } = await response.json();
      const { idMeal } = meals[0];

      history.push(`/foods/${idMeal}`);
    } catch (error) {
      console.error('Error getting the random meal');
    }
  };

  return (
    <ExploreFoodS>
      <Header title="Explore Foods" />
      <section>
        <Link to="/explore/foods/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>

        <Link to="/explore/foods/nationalities">
          <button
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        </Link>

        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ onSurpriseMe }
        >
          Surprise me!
        </button>
      </section>
      <MenuBar />
    </ExploreFoodS>
  );
}
