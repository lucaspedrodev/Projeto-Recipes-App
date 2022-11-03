import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const clip = require('clipboard-copy');

export default function DoneRecipesCard(props) {
  const { doneRecipe, index } = props;
  const [copyLink, setCopyLink] = useState(false);

  const copyUrl = () => {
    clip(`http://localhost:3000/${doneRecipe.type}s/${doneRecipe.id}`);
    setCopyLink(true);
  };
  return (
    <main>
      {doneRecipe.type === 'meal' ? (
        <div key={ doneRecipe.id }>
          { copyLink && (<p>Link copied!</p>)}
          <Link key={ index } to={ `/meals/${doneRecipe.id}` }>
            <p data-testid={ `${index}-horizontal-name` }>{doneRecipe.name}</p>
            <img
              data-testid={ `${index}-horizontal-image` } 
              src={ doneRecipe.image }
              alt={ doneRecipe.name }
              width='100'
            />
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            {doneRecipe.nationality}
            {' '}
            -
            {' '}
            {doneRecipe.category}
          </p>
          <p data-testid={ `${index}-horizontal-done-date` }>
            {doneRecipe.doneDate}
          </p>
          {doneRecipe.tags.map((tag, i) => (
            <p key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>
              {tag}
            </p>
          ))}
          <button
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            type="button"
            onClick={ () => copyUrl(doneRecipe) }
          >
            Share
          </button>
        </div>
      ) : (
        <div key={ doneRecipe.id }>
          { copyLink && (<p>Link copied!</p>)}
          <Link key={ index } to={ `/drinks/${doneRecipe.id}` }>
            <p data-testid={ `${index}-horizontal-name` }>{doneRecipe.name}</p>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ doneRecipe.image }
              alt={ doneRecipe.name }
            />
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            {doneRecipe.alcoholicOrNot}
          </p>
          <p data-testid={ `${index}-horizontal-done-date` }>
            {doneRecipe.doneDate}
          </p>
          <button
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            type="button"
            onClick={ () => copyUrl(doneRecipe) }
          >
            Share
          </button>
        </div>
      )}
    </main>
  );
}

DoneRecipesCard.propTypes = {
  doneRecipe: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
  index: PropTypes.number.isRequired,
};
