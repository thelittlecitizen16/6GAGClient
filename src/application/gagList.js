import React, { useState } from 'react';
import Gag from './gag';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, Link , Route, Redirect} from "react-router-dom";



function GagList(props) {
    const history = useHistory();

    function Render(gag) {
        history.push({
            pathname: '/gagPage',
            search: '?query=abc',
            state: { name: gag["title"], text: gag["text"] }
        });
    }

    var renderGagas = props.gags.map(gag => <Col onClick={() => { Render(gag) }}><Gag title={gag["title"]} text={gag["text"]} /></Col>);

    return (
        <Container>
            <Row className="justify-content-md-center">
                {renderGagas}
            </Row>
        </Container>

    );
}

export default GagList;
