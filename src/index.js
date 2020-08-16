import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import Navigation from './navigation';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);


