
function AddNameLogIN(name) {
    localStorage.setItem('names', name);
}

function GetName() {
    return localStorage.getItem('names');
}

function Remove() {
    localStorage.removeItem('names');
}


function AddLikeToPost(id) {
    let posts = JSON.parse(localStorage.getItem('posts'));
    if (posts == null) {
        posts = [];
        localStorage.setItem('posts', JSON.stringify(posts));
    }
    else {
        posts.push(id);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

}

function RemoveLikeToPost(id) {

    let posts = JSON.parse(localStorage.getItem('posts'));

    const index = posts.indexOf(id);
    if (index > -1) {
        posts.splice(index, 1);
    }
    localStorage.setItem('posts', JSON.stringify(posts));
}

function IsPostLiked(id) {
    let posts = JSON.parse(localStorage.getItem('posts'));
    if (posts == null) {
        return false;
    }
    return posts.includes(id);
}

export { AddNameLogIN, GetName, Remove, AddLikeToPost, IsPostLiked, RemoveLikeToPost };