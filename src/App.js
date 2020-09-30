import React, { useState } from 'react';
import './App.css';
import GagList from './application/gagList';
//import { Switch, Route, Router,Routes, Link } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {

  const [gags, setGags] = useState([{ "title": "afek", "text": "aaaa" }, { "title": "afek2", "text": "bbbb" }, { "title": "afek3", "text": "ccc" }]);

  return (
    <div className="App">
      <Router>
        <div>
          <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
              Home
    </Link>
            <Link to="/about" style={{ padding: 5 }}>
            GagList
    </Link>
          </nav>
        </div>
        <Switch>
          <Route path="/about">
            <GagList gags={gags} setGags={setGags} />
          </Route>
          <Route path="/">
          <GagList gags={gags} setGags={setGags} />
          </Route>
        </Switch>
      </Router>
      {/* <GagList gags={gags} setGags={setGags} /> */}
    </div>
  );
}

export default App;



