import React from 'react';
import { CreateNewGAG } from './connectionToServer';
import { useHistory } from "react-router-dom";
import './style/createGAG.css';

function CreateGagPage(props) {
    const history = useHistory();

    function CreateGag() {
        CreateNewGAG();
        history.push({
            pathname: '/'
        });
    }

    return (
        <div id="GagForm" class="login-page">
            <div class="form">
                <form class="login-form">
                    <h1 class="creatGag">Create GAG</h1>
                    <input class="creatGag" id="title" placeholder="Enter Title..." ></input>
                    <input class="creatGag" id="text" placeholder="Enter Text..." ></input>
                    <input type="file" id="file" class="creatGag" name="file"></input>
                    <button class="create creatGag" onClick={() => { CreateGag() }}>Create</button>
                </form>
            </div>
        </div>
    );
}

export default CreateGagPage;