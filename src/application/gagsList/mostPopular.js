import React from 'react';
import GagList from '../gagList';
import '../style/gag.css';



function MostPopular(props) {
    let mostPopular = props.gags.sort((a, b) => b["likes"] - a["likes"]);
    mostPopular= mostPopular.slice(0,5);
   
    return (
        <GagList setGags={props.setGags}  gags={ mostPopular}/>
    );
}

export default MostPopular;
