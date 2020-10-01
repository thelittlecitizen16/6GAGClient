import React from 'react';
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
        RemoveLikeToGAG(id);
        props.setPostLiked(IsPostLiked(id));
    }

    let likeButton;
    props.setPostLiked(IsPostLiked(props._id));

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
        <div class="card-footer text-left">
            <small>Liked By : {props.likes}</small>
            {likeButton}
        </div>
    );
}

export default Likes;
