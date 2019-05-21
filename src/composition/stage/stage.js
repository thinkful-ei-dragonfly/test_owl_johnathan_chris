import React from 'react';

function Stage(props) {
    return (
        <div className="stage-container">
            <span className="user-name">{props.name}</span>
            <img src={props.avatar}/>
            <button className="volume">&#128266;</button>
        </div>
    )
}

export default Stage;