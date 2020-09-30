import React, { useState } from 'react';
import './App.css';
import GagList from './application/gagList';
import GagPage from './application/gagPage';
import GetAllGags from './application/connectionToServer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";


function App() {

  const [gags, setGags] = useState([]);
  GetAllGags(setGags);

 

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



