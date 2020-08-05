import React from 'react';
import PageLayout from '../../page-layout';
import PlaysGuest from '../../plays-guest';
import PlaysUser from '../../plays-user';

const HomePage = () => {
  return (
    <div>
      <PageLayout>
      <PlaysGuest />
      </PageLayout>
    </div>
  )
}

export default HomePage;
