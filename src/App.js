import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import Provider from './Context/Provider';
import Login from './pages/Login';

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
          <Recipes />
          <Footer />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
