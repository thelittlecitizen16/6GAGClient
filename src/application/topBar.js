import React from 'react';
import GagList from './application/gagList';


function TopBar(props) {
    return (
        <Router>
            {/* <Route path="/" component={App}>
                <Route path="page1" component={Page1} />
                <Route path="page2" component={Page2} />
            </Route> */}
            <Route path="/homePage" component={GagList} />
        </Router>
      );
}

export default TopBar;