import React from 'react';
import './App.css';
import Home from 'pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchResult from 'pages/SearchResult/SearchResult';

function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/search">
            {/* Search page (The result page) */}
            <SearchResult />
          </Route>
          <Route path="/">
            {/* Home (the one with the search on) */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
