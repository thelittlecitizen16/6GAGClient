import React from 'react';
import axios from 'axios';
import config from '../config.json'
import { GetName } from './handleLocalStorage';

async function GetAllGags(setGags) {
  let response = await axios.get(config.serverPath + `api/gags`)
  setGags(response.data);
}

async function CreateNewGAG() {

  let data;
  let title = document.getElementById("title").value;
  let text = document.getElementById("text").value;
  let file = document.getElementById("file");

  var formData = new FormData()
  formData.append('name', GetName());
  formData.append('title', title);
  formData.append('text', text);
  formData.append("image", file.files[0]);

  await axios.post(config.serverPath + `api/gag`, formData)
    .then(res => {
      data = res.data;
    });
}

export { GetAllGags, CreateNewGAG };