import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <h2> hello from individual card</h2>
      <div className="headline">{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={'' /* image source goes here */} />
        </div>
        <span>By {/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
