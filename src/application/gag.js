import React from 'react';
import './style/gag.css';

function Gag(props) {
  function GetPicture() {
    if (props.file == undefined) {
      return <p>No Picture</p>
    }
    return <img class="img card-img" alt="Card image" src={`data:image/jpeg;base64,${props.file}`} />
  }

  return (
    <div class="card text-center gag" >
      <div class="card-header">{props.title}</div>
      <div class="card-body">
        <p class="card-title">{props.text}</p>
        <p class="card-text">Created By:{props.name}</p>
        {GetPicture()}
      </div>
    </div>
  );
}

export default Gag;
