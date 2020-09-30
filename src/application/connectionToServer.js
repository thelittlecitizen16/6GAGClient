import React from 'react';
import axios from 'axios';

async function GetAllGags(setGags) {
  let data;
  await axios.get(`http://localhost:8000/api/gags`)
    .then(res => {
      data = res.data;
    });

    setGags(data);
}


export default GetAllGags;