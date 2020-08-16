import React from 'react'
import HomePage from './components/pages/home-page'
import Register from './components/pages/register'
import Login from './components/pages/login'
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
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation
