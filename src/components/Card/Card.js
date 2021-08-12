import React from 'react';
import './Card.css';

function Card(props) {
  const styles = {
    backgroundImage: `url(${props.imageURL})`,
    backgroundColor: `${props.color}`
  };

  return (
    <div className="card" style={styles}>
      <p className="card-content">TESTING...</p>
    </div>
  );
}

export default Card;