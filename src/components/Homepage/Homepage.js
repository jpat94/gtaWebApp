import React from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import image from '../../images/cover.jpg';

function Homepage() {
  return (
    <div>
      <Header />
      <div>
        <Card imageURL={image} />
      </div>
      <div>
        <Card color='black' />
      </div>
    </div>
  );
}

export default Homepage;