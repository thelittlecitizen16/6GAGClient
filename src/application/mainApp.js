import React from 'react';
import MostPopular from './gagsList/mostPopular';
import HomePage from './gagsList/homePage';
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
    function LogOut() {
        Remove();
        props.setName(GetName());
    }
    
    return (
        <div className="App">
            <Router>
                <div>
                    <nav class="topnav">
                        <Link to="/" class="herfTopBar left">Home</Link>
                        <Link to="/createGag" class="herfTopBar left">CreateGAG</Link>
                        <Link to="/mostPopular" class="herfTopBar left">mostPopular</Link>
                        <Link onClick={() => LogOut()} class="herfTopBar right">LogOut</Link>
                    </nav>
                    <Switch>
                        <Route path="/mostPopular">
                            <MostPopular gags={props.gags} setGags={props.setGags} />
                        </Route>
                        <Route path="/createGag">
                            <CreateGagPage gags={props.gags} setGags={props.setGags} />
                        </Route>
                        <Route path="/gagPage">
                            <GagPage />
                        </Route>
                        <Route path="/" >
                            <HomePage gags={props.gags} setGags={props.setGags} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>

    );
}
export default MainApp;
