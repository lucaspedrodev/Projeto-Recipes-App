import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Login from './pages/Login';
import Provider from './Context/Provider';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import Recipes from './pages/Recipes';
import Header from './components/Header';

export default function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/drinks">
          <Header />
          <Recipes />
          <Footer />
        </Route>
        <Route exact path="/meals">
          <Header />
          <Recipes />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Profile />
          <Footer />
        </Route>
        <Route path="/meals/:id" component={ RecipeDetails } />
        <Route path="/drinks/:id" component={ RecipeDetails } />
      </Switch>
    </Provider>
  );
}
