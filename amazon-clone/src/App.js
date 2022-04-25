import React from 'react';
import './App.css';

import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Link to="/checkout">asafasdf</Link>
        <Switch>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
