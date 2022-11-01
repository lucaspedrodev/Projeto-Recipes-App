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
import RecipeInProgress from './pages/RecipeInProgress';


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
        <Route exact path="/meals/:id" component={ RecipeDetails } />
        <Route exact path="/drinks/:id" component={ RecipeDetails } />
        <Route exact path="/meals/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ RecipeInProgress } />
      </Switch>
    </Provider>
  );
}
