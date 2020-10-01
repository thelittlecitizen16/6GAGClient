import React, { useState, useEffect } from 'react';
import Gag from './gag';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { GetAllGags } from './connectionToServer';
import './style/gag.css';



function GagList(props) {
    useEffect(() => {
         GetAllGags(props.setGags)   
    },[]);

    const history = useHistory();

    function Render(gag) {
        history.push({
            pathname: '/gagPage',
            search: '?query=abc',
            state: { title: gag["title"], text: gag["text"],name: gag["name"] ,file: gag["file"], _id: gag["_id"],likes: gag["likes"] }
        });
    }
    console.log(props.gags);
    var renderGagas = props.gags.map(gag => <Col md={3} className="colGag" onClick={() => { Render(gag) }}><Gag title={gag["title"]} text={gag["text"] }  name={gag["name"] } file={gag["file"] } _id={gag["_id"] }  likes={gag["likes"] }/></Col>);

    return (
        <Container>
            <Row className="justify-content-md-center">
                {renderGagas}
            </Row>
        </Container>

    );
}

export default GagList;
