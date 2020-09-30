import React from 'react';
import axios from 'axios';
import config from '../config.json'

async function GetAllGags(setGags) {
  let response =await axios.get(config.serverPath + `api/gags`)
  setGags(response.data);
}


async function CreateNewGAG(gags, setGags) {
  console.log("post");
  let data;
  let name = document.getElementById("name").value;
  let title = document.getElementById("title").value;
  let text = document.getElementById("text").value;

  var bodyFormData = {
    "name":  name ,
    "title": title ,
    "text": text ,
    "picture": "dddd"
  };

  await axios.post(config.serverPath + `api/gag`, bodyFormData)
    .then(res => {
      data = res.data;
    });
}

export { GetAllGags, CreateNewGAG };