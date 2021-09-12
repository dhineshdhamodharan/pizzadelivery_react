import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './home';
import Cart from './cart';
import Login from './login';
import Register from './register';
import { Redirect } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
          <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>
  );
}

export default App;
