// - IMPORTS - //
  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
  
  // - Components - //
  import Card from './Card';
// --**-- END --**-- 
// - CODE START - //
const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map( card => {
        return (
          <Card 
            card={card}
          />
        )
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array
}
export default Cards;