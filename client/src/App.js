import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

  function App() {

        return (
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />

          </Router>
        );
    }
  


export default App;