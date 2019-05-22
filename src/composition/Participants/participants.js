import React from 'react';
import User from '../User/user.js';


//iterate over array of partcipants
//create users based on that information
function Participants(props) {
    const participants = props.participants.map(user  => {
        return <User key={user.id} display={'inList'} avatar={user.avatar} name={user.name} onStage={user.onStage}/>
    });
    return (
        <div className="participants-list">
        <ul>
        {participants}
        </ul>
        </div>
    )
}

export default Participants;