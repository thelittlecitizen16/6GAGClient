import React from 'react';
import GagList from '../gagList';
import '../style/gag.css';



function HomePage(props) {
    return (
        <GagList setGags={props.setGags}  gags={ props.gags}/>
    );
}

export default HomePage;
