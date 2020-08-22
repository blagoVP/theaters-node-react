import React, { useState, useContext, useEffect } from 'react';
import PageLayout from '../../page-layout';
import PlaysGuest from '../../plays-guest';
import PlaysUser from '../../plays-user';
import UserContext from '../../../Context'

const HomePage = () => {

  const [plays, setPlays] = useState([]);

  useEffect(()=>{
  fetch('http://localhost:9999/api/home/').then((res) => {
      res.json().then((plays) => {
        setPlays(plays)
      })
    })
  }, [])

  const context = useContext(UserContext)

  const {
      loggedIn,
      user
    } = context


    if (loggedIn) {
      return (
        <div>
          <PageLayout >
            <PlaysUser plays={plays} />
          </PageLayout>
        </div>
      )
    } else {
      return (
        <div>
          <PageLayout>
            <PlaysGuest plays={plays} />
          </PageLayout>
        </div>
      )
    }
  }


export default HomePage;
