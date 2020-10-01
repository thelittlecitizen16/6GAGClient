import React, { useState } from 'react';
import './style/gag.css';
import { AddLikeToGAG } from './connectionToServer';
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { AddLikeToPost, IsPostLiked, RemoveLikeToPost } from './handleLocalStorage';


function Gag(props) {

  function AddLike(id) {
    console.log(IsPostLiked(id));

    AddLikeToPost(id);
    AddLikeToGAG(id);

    setPostLiked(IsPostLiked(id));
  }

  function UnLike(id) {
    RemoveLikeToPost(id);
    console.log(IsPostLiked(props._id));
    //AddLikeToGAG(id);
    setPostLiked(IsPostLiked());
  }

  const [postLiked, setPostLiked] = useState(IsPostLiked(props._id));

  let likeButton;
  console.log(postLiked);
  if (postLiked) {
    likeButton = (
      likeButton = <BsFillHeartFill class="float-right" onClick={() => UnLike(props._id)} />
    );
  }
  else {
    likeButton = (<BsHeart class="float-right" onClick={() => AddLike(props._id)} />
    );
  }

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
      <div class="card-footer text-left">
        <small>Liked By : {props.likes}</small>
        {likeButton}
      </div>
    </div>
  );
}

export default Gag;
