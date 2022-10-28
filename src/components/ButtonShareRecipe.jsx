import React, { useState } from 'react';
import PropTypes from 'prop-types';

const copy = require('clipboard-copy');

export default function ButtonShareRecipe(props) {
  const { url } = props;
  const [msgShow, setMsgShow] = useState(false);

  const handleShareBtn = () => {
    copy(`http://localhost:3000${url}`);
    setMsgShow(true);
  };
  return (
    <div>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => handleShareBtn() }
      >
        Share
      </button>
      {
        msgShow && (
          <span>
            Link copied!
          </span>
        )
      }
    </div>
  );
}

ButtonShareRecipe.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }),
}.isRequired;
