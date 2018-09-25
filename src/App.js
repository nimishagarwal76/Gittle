import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Battle from './components/Battle'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>      
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
