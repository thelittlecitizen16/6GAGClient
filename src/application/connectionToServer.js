import React from 'react';
import axios from 'axios';
import config from '../config.json'

async function GetAllGags(setGags) {
  let data;
 // console.log(config.serverPath);
  await axios.get(config.serverPath+`api/gags`)
    .then(res => {
      data = res.data;
    });

    setGags(data);
}

export default GetAllGags;