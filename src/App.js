import React, { useState } from 'react';
import './App.css';
import GagList from './application/gagList';
import GagPage from './application/gagPage';
import {GetAllGags} from './application/connectionToServer';
import CreateGagPage from './application/createGagPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";


function App() {
  const [gags, setGags] = useState([]);

  return (
    <div className="App">
      <Router>
        <div>
          <nav style={{ margin: 10 }}>
            <Link to="/">Home</Link>
            <Link to="/createGag">CreateGAG</Link>
          </nav>
          <Switch>
            <Route path="/createGag">
              <CreateGagPage gags={gags} setGags={setGags}/>
            </Route>
            <Route path="/gagPage">
              <GagPage />
            </Route>
            <Route path="/" >
            <GagList gags={gags} setGags={setGags} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;



