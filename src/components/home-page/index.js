import React from 'react';
import Header from '../header';
import PlaysGuest from '../plays-guest';
import PlaysUser from '../plays-user';
import Footer from '../footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <PlaysUser />
      <Footer />
    </div>
  )
}

export default HomePage;
