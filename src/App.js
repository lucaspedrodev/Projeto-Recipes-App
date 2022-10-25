import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Provider from './Context/Provider';
import DoneRecipes from './pages/DoneRecipes';
import Drink from './pages/Drink';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Meals from './pages/Meals';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/meals" component={ Meals } />
        <Route path="/drinks" component={ Drink } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </Provider>
  );
}
