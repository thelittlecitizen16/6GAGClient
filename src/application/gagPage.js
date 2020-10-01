import React from 'react';
import { useLocation } from "react-router-dom";
import Gag from './gag';


function GagPage() {
    const location = useLocation();

    return (
        <div class ="gagShow">
            <Gag title={location.state.name} text={location.state.text} file={location.state.file}/>
        </div>
    );
}
export default GagPage;