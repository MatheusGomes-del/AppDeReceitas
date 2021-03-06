import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import AppContext from '../../../context/AppContext';
import FoodCard from '../../components/FoodCard';
// import { useHistory } from 'react-router-dom';
import ExploreNation from './styled';

export default function ExploreNationalities() {
  const [igredients, setIgredients] = useState([]);
  const { getFoods, list, setList, foods } = useContext(AppContext);
  const [magicNumber] = useState('12');

  // const history = useHistory();

  useEffect(() => {
    async function getIgredients() {
      try {
        const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
        const response = await fetch(endpoint);
        const { meals } = await response.json();

        setIgredients(meals);
      } catch (error) {
        return error;
      }
    }
    getFoods();
    getIgredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectNations = async ({ target }) => {
    if (target.value === 'All') {
      return setList(foods);
    }
    try {
      const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${target.value}`;
      const response = await fetch(endpoint);
      const { meals } = await response.json();
      setList(meals);
    } catch (error) {
      return error;
    }
  };

  return (
    <ExploreNation>
      <Header title="Explore Nationalities" enableSearchButton />
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ selectNations }
      >
        <option data-testid="All-option">All</option>
        { igredients.map((igredient) => (
          <option
            key={ igredient.strArea }
            data-testid={ `${igredient.strArea}-option` }
          >
            { igredient.strArea }
          </option>
        )) }
      </select>
      <section id="recipe">
        {list?.map((recipe, index) => (
          <FoodCard
            key={ recipe.idMeal }
            food={ recipe }
            idTest={ index }
            test="card-name"
          />
        )).slice(0, Number(magicNumber))}
      </section>
      <MenuBar />
    </ExploreNation>
  );
}
