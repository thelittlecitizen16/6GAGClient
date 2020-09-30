import React,  { useState }  from 'react';
import './App.css';
import GagList from './application/gagList';


function App() {

  const [gags, setGags] = useState([{"title":"afek","text":"aaaa"},{"title":"afek2","text":"bbbb"},{"title":"afek3","text":"ccc"}]);

  return (
    <div className="App">
      <GagList gags={gags} setGags={setGags}/>
    </div>
  );
}

export default App;
