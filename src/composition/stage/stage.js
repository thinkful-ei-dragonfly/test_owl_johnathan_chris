import React from 'react';

function Stage(props) {
    return (
        <div className="stage-container">
            <span className="user-name">{props.name}</span>
            <img src={props.avatar} alt="stage-avatar"/>
            <span>
            <button className="volume">&#128266;</button>
            </span>
        </div>
    )
}

export default Stage;