import React, { useState } from 'react';
import './style/gag.css';
import { IsPostLiked } from './handleLocalStorage';
import Likes from './Likes/handleLikes'

function Gag(props) {
  const [postLiked, setPostLiked] = useState(IsPostLiked(props._id));

  function GetPicture() {
    if (props.file === undefined) {
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
        <Likes likes={props.likes} _id={props._id} postLiked={postLiked} setPostLiked={setPostLiked} />
    </div>
  );
}

export default Gag;
