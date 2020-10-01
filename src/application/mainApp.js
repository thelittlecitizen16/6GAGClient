import React from 'react';
import GagList from './gagList';
import GagPage from './gagPage';
import CreateGagPage from './createGagPage';
import { Remove, GetName } from './handleLocalStorage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

function MainApp(props) {
    function LogOut()
    {
        Remove();
        props.setName(GetName());
        console.log("logOut")

    }
    return (
        <div className="App">
        <Router>
          <div>
            <nav class="topnav">
              <Link to="/" class="herfTopBar">Home</Link>
              <Link to="/createGag" class="herfTopBar">CreateGAG</Link>
              <Link onClick={()=>LogOut()} class="herfTopBar">LogOut</Link>
            </nav>
            <Switch>
              <Route path="/createGag">
                <CreateGagPage gags={props.gags} setGags={props.setGags} />
              </Route>
              <Route path="/gagPage">
                <GagPage />
              </Route>
              <Route path="/" >
                <GagList gags={props.gags} setGags={props.setGags} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
  export default MainApp;
  