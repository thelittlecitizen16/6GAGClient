import React, {  useEffect } from 'react';
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

    function ShowOneGag(gag) {
        history.push({
            pathname: '/gagPage',
            search: '?query=abc',
            state: { title: gag["title"], text: gag["text"],name: gag["name"] ,file: gag["file"], _id: gag["_id"],likes: gag["likes"] }
        });
    }
    var renderGagas = props.gags.map(gag => <Col md={3} className="colGag" onClick={() => { ShowOneGag(gag) }}><Gag title={gag["title"]} text={gag["text"] }  name={gag["name"] } file={gag["file"] } _id={gag["_id"] }  likes={gag["likes"] }/></Col>);

    return (
        <Container>
            <Row className="justify-content-md-center">
                {renderGagas}
            </Row>
        </Container>

    );
}

export default GagList;
