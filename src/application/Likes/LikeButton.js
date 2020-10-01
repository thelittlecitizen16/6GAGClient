import React from 'react';
import './style/gag.css';


function Like(props) {


  return (
    <div class="gag">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Gag;
