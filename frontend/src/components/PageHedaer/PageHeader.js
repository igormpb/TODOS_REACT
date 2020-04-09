import React from 'react';
import './style.css'
function PageaHeader(props) {
    return(
    
    <header className="page-header">
        <h2>{props.name} <small>{props.small}</small></h2>
        <hr/>
    </header>

    )
}

export default PageaHeader;