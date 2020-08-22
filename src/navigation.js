import React from 'react'
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
  Route
} from 'react-router-dom'



const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch >
      <Route path="/" exact component={HomePage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/create" component={CreateTheater} />
      <Route path="/edit/:id" component={EditTheater} />
      <Route path="/details/:id" component={DetailsPage} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation
