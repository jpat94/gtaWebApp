import React from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import CoverImage from '../../images/cover.jpg';
import Footer from '../Footer/Footer';

function Homepage() {
  return (
    <div>
      <Header />
      <Card imageURL={CoverImage} />
      <Card color='blue' />
      <Footer />
    </div>
  );
}

export default Homepage;
