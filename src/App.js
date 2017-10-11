import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>);
  }
}

export default App;
