import React from 'react';
import {useLocation} from "react-router-dom";
  import Gag from './gag';

function GagPage() {
    const location = useLocation();

    return (
      <div>
       <Gag title={location.state.name} text={location.state.text} />
      </div>
    );
  }

  export default GagPage;