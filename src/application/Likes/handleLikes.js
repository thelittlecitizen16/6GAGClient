import React, { useState } from 'react';
import '../style/gag.css';
import { AddLikeToGAG, RemoveLikeToGAG } from '../connectionToServer';
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { AddLikeToPost, IsPostLiked, RemoveLikeToPost } from '../handleLocalStorage';


function Likes(props) {

    function AddLike(id) {
        AddLikeToPost(id);
        AddLikeToGAG(id);
        props.setPostLiked(IsPostLiked(id));
    }

    function UnLike(id) {
        RemoveLikeToPost(id);
        console.log(IsPostLiked(props._id));
        RemoveLikeToGAG(id);
        props.setPostLiked(IsPostLiked());
    }

    let likeButton;

    if (props.postLiked) {
        likeButton = (
            likeButton = <BsFillHeartFill class="float-right" onClick={() => UnLike(props._id)} />
        );
    }
    else {
        likeButton = (<BsHeart class="float-right" onClick={() => AddLike(props._id)} />
        );
    }

    return (
        <div>
            {likeButton}
        </div>

    );
}

export default Likes;
