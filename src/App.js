import React, { useState } from 'react';
import './App.css';
import GagList from './application/gagList';
import GagPage from './application/gagPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";


function App() {


  const [gags, setGags] = useState([{ "title": "afek", "text": "aaaa" }, { "title": "afek2", "text": "bbbb" }, { "title": "afek3", "text": "ccc" }]);

  return (
    <div className="App">
      <Router>
        <div>
          <nav style={{ margin: 10 }}>
            <Link to="/">Home</Link>
          </nav>
          <Switch>
            <Route path="/gagPage">
              <GagPage />
            </Route>
            <Route path="/">
              <GagList gags={gags} setGags={setGags} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;



