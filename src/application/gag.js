import React from 'react';
import './style/gag.css';

function Gag(props) {
  function GetPicture() {
    if (props.file == undefined) {
      return <p>No Picture</p>
    }
    return <img class="img" src={`data:image/jpeg;base64,${props.file}`} />
  }

  return (
    <div class="gag">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <p>Created By:{props.name}</p>
      <div>{GetPicture()}</div>
    </div>
  );
}

export default Gag;
