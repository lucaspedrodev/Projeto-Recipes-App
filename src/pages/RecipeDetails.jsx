import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function RecipeDetails(props) {
  useEffect(() => {
    const requestApi = async () => {
      const { match: { params: { id } } } = props;
      try {
        const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const response = await request.json();
        return response;
      } catch (e) {
        throw new Error(e.message);
      }
    };
    requestApi();
  }, [props]);

  useEffect(() => {
    const { match: { params: { id } } } = props;
    const requestApi = async () => {
      try {
        const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const response = await request.json();
        return response;
      } catch (e) {
        throw new Error(e.message);
      }
    };
    requestApi();
  }, [props]);
  return (
    <div>RecipeDetails</div>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
