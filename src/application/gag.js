import React from 'react';
import './style/gag.css';
const mystyle = {
  
  };

function Gag(props)
{
    return (
         <div class="gag">
             <h1>{props.title}</h1>
             <p>{props.text}</p>
             <img></img>
         </div>
      );
}

export default Gag;
