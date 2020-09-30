import React from 'react';
import { CreateNewGAG } from './connectionToServer';
import { useHistory } from "react-router-dom";
import './style/createGAG.css';


function CreateGagPage(props) {
    const history = useHistory();

    function Render(gags, setGags) {
        CreateNewGAG(gags, setGags);
        history.push({
            pathname: '/'
        });

    }

    return (
        <div>
            <h1 class= "creatGag">Create GAG</h1>
            <div>
                <input class= "creatGag" id="name" placeholder="Enter Name..."></input>
            </div>
            <div>
                <input class= "creatGag" id="title" placeholder="Enter Title..."></input>
            </div>
            <div>
                <input class= "creatGag" id="text" placeholder="Enter Text..."></input>
            </div>
            <div>
                <button class="create" onClick={() => { Render(props.gags, props.setGags) }}>Create</button>
            </div>
        </div>
    );
}
//
export default CreateGagPage;