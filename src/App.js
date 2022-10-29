import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Provider from './Context/Provider';
import Login from './pages/Login';
import RecipeDetails from './pages/RecipeDetails';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/drinks">
          <Recipes />
          <Footer />
        </Route>
        <Route exact path="/meals">
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

export default App;
