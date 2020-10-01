import React from 'react';
import { useLocation } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

import Gag from './gag';


function GagPage() {
    const location = useLocation();

    return (
        <div class="gagShow">
            <Row className="justify-content-md-center">
                <Col md={3}>
                    <Gag title={location.state.title} text={location.state.text} name={location.state.name} file={location.state.file} _id={location.state._id} likes={location.state.likes} />
                </Col>
            </Row>

        </div>
    );
}
export default GagPage;