import React from 'react';
import {CreateNewGAG} from './connectionToServer';
import { useHistory} from "react-router-dom";


function CreateGagPage(props) {
    const history = useHistory();

    function Render(gags,setGags) {
        CreateNewGAG(gags,setGags);
        history.push({
            pathname: '/'
        });

    }
 
    return (
        <div>
           <h1>Create GAG</h1>
           <input id="name" placeholder="Enter Name..."></input>
           <input id="title" placeholder="Enter Title..."></input>
           <input id="text" placeholder="Enter Text..."></input>
           <button onClick={()=>{Render(props.gags, props.setGags)}}>Create</button>
           
        </div>
    );
}
//
export default CreateGagPage;