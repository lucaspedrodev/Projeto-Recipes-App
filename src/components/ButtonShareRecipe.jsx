import React, { useState } from 'react';
import Share from '../images/Share.svg';

const copy = require('clipboard-copy');

export default function ButtonShareRecipe() {
  const [msgShow, setMsgShow] = useState(false);

  const handleShareBtn = () => {
    if (window.location.href.includes('in-progress')) {
      const index = window.location.href.indexOf('in-progress');
      copy(window.location.href.substring(0, index - 1));
      setMsgShow(true);
    } else {
      copy(window.location.href);
      setMsgShow(true);
    }
  };
  return (
    <>
      {msgShow && (
        <p data-testid="msg-share">
          Link copied!
        </p>
      )}
      <div>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => handleShareBtn() }
          className="Share__favorite__btn"
        >
          <img src={ Share } alt="Share" />
        </button>
      </div>
    </>
  );
}
