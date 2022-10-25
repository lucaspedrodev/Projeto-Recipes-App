import React from 'react';
import './App.css';
import Recipes from './components/Recipes.js'
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
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
