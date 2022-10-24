import React from 'react';
import './App.css';
import Recipes from './/Components/Recipes.js'
import { Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Provider from './Context/Provider';

function App() {
  return (
    
    <Provider>
      <Footer />
      <Route
      exact
      path="/drinks"
      component={ Recipes }
    />
    <Route
      exact
      path="/meals"
      component={ Recipes }
    />
    </Provider>
  );
}

export default App;
