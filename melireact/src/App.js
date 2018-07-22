import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import SearchBox from "./SearchBox/SearchBox"
import ItemDescription from "./ItemDescription/ItemDescription"
import SerachResults from "./SearchResults/SearchResults"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={SearchBox} />
          <Route exact path="/items" component={SerachResults} />
          <Route path="/items/:id" component={ItemDescription} />
        </div>
      </Router>
    );
  }
}

export default App;
