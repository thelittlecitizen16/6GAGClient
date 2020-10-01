import React, { useState } from 'react';
import './App.css';
import './application/style/topBar.css';
import { AddNameLogIN, GetName } from './application/handleLocalStorage';
import LogIn from './application/LogApplication/logIn';
import MainApp from './application/mainApp';

function App() {
  const [gags, setGags] = useState([]);
  const [name, setName] = useState(GetName());

  function Render() {
    let name = document.getElementById("name").value;
    AddNameLogIN(name);
    setName(name);
  }
  let questions;

  if (name !== null) {
    questions = (
     <MainApp gags={gags} setGags={setGags} setName={setName}/>
    )
  }
  else{
    questions =
   <LogIn Render ={Render}/>
  }

  return (
    <div>
      {questions}
    </div>

  );
}
export default App;



