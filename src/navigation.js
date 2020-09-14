import React, { useContext } from 'react'
import UserContext from './Context'
import HomePage from './components/pages/home-page'
import Register from './components/pages/register'
import Login from './components/pages/login'
import Logout from './components/logout'
import CreateTheater from './components/pages/create-theater-page'
import DetailsPage from './components/pages/details-page'
import EditTheater from './components/pages/edit-theater-page'
import NotFound from './components/pages/not-found-page'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

const Navigation = () => {

  const context = useContext(UserContext)
  const {
    user
  } = context

  return (
    <BrowserRouter>
      <Switch >
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" >
          {user ? (<Logout />) : (<Redirect to="/login" />)}
        </Route>
        <Route path="/create">
          {user ? (<CreateTheater />) : (<Redirect to="/login" />)}
        </Route>
        <Route path="/edit/:id" >
          {user ? (<EditTheater />) : (<Redirect to="/login" />)}
        </Route>
        <Route path="/details/:id" >
          {user ? (<DetailsPage />) : (<Redirect to="/login" />)}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation
