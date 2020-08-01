import React from 'react'
import HomePage from './components/home-page'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch >
      <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
