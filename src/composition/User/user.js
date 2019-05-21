import React from 'react';

function User(props) {
    let stageStatus; 
    if(props.onstage) {
        stageStatus = "on stage";
    } else if(!props.onstage && props.inSession) {
        stageStatus = "in session";
    } else {
        stageStatus = "left session";
    }
    return (
        <li className="user-participant">
            <div className="user-name">{props.name}</div>
            <img src={props.avatar}/>
            <span className="session-status">{stageStatus}</span>     
        </li>
        );
}

export default User;