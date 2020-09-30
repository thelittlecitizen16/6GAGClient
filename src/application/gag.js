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
             <img class="img" src={`data:image/jpeg;base64,${props.file}`} />
         </div>
      );
}

export default Gag;
