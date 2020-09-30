import React from 'react';
import Gag from './gag';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { findByTitle } from '@testing-library/react';



function GagList(props) {

    var renderGagas = props.gags.map(gag=> <Col><Gag title={gag["title"]} text={gag["text"]}/></Col> );

    return (
        <Container>
            <Row className="justify-content-md-center">
           {renderGagas}
            </Row>
        </Container>

    );
}

export default GagList;
