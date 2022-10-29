import React, { useState } from 'react';

const copy = require('clipboard-copy');

export default function ButtonShareRecipe() {
  const [msgShow, setMsgShow] = useState(false);

  const handleShareBtn = () => {
    copy(window.location.href);
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
          <span data-testid="msg-share">
            Link copied!
          </span>
        )
      }
    </div>
  );
}
