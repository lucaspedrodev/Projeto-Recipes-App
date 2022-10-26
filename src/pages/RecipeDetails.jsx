// import React, { useContext } from 'react';
import Meals from '../components/Meals';
import Drink from '../components/Drink';
// import Context from '../Context/Context';

export default function RecipeDetails(props) {
  // const { typeRecipes } = useContext(Context);

  return (
    <div>

      <Meals props={ props } />
      <Drink props={ props } />

    </div>
  );
}
