import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Provider from './Context/Provider';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/drinks" component={ Recipes }>
        </Route>
        <Route exact path="/meals" component={ Recipes }>
        </Route>
        <Route exact path="/profile">
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
