import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./components/Game";
import Footer from "./components/Footer";
import Submit from "./components/Submit";
import Nav from "./components/Nav/Nav";

class App extends Component {
  render() {
    return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Game} />
          <Route exact path="/submit" component={Submit} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
