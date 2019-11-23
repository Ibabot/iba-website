import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Header from './components/Header.js';


class App extends Component {
  render() {
    const App = () => (
      <div className="iba-web">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;