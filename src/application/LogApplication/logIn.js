import React, { useState } from 'react';
import './logIn.css';
function LogIn(props) {


    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input  id="name" type="text" placeholder="username" />
                    <button onClick={() => { props.Render() }}>login</button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;



