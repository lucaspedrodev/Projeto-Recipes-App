import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './Context/Provider';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
