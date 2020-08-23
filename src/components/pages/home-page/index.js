import React, { useState, useContext, useEffect } from 'react';
import PageLayout from '../../page-layout';
import PlaysGuest from '../../plays-guest';
import PlaysUser from '../../plays-user';
import UserContext from '../../../Context'
import ErrorNotifications from '../../notifications'

const HomePage = () => {

  const [plays, setPlays] = useState([]);
  const [message, setMessage] = useState(null)

  useEffect(()=>{
  fetch('http://localhost:9999/api/home/').then((res) => {
      res.json().then((plays) => {
        setPlays(plays)
      })
    }).catch((err) => {
      setMessage("Something went wrong")
      console.log(err)
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
          { message ? <ErrorNotifications message={message} /> : null}
            <PlaysUser plays={plays} />
          </PageLayout>
        </div>
      )
    } else {
      return (
        <div>
          <PageLayout >
          { message ? <ErrorNotifications message={message} /> : null}
            <PlaysGuest plays={plays} />
          </PageLayout>
        </div>
      )
    }
  }


export default HomePage;
