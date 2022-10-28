import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
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
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/drinks">
          <Drink />
          <Footer />
        </Route>
        <Route exact path="/meals">
          <Meals />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Profile />
          <Footer />
        </Route>
      </Switch>
    </Provider>
  );
}
