import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Featured from './container/Featured.js';
import About from './container/About.js';
import Article from './container/Article.js';
import logo from './logo.svg';
import './App.css';
import './Custom.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to="/"><p>Featured</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/article"><p>Article</p></Link>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exact path="/" component={Featured} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article} />
      </div>
    );
  }
}

export default App;
