import React from 'react';
import ChatEvent from './chatEvent';

function StageList(props) {
    const events = props.events.map(event => {
        return <ChatEvent participantId={event.participantId} type={event.type} message={event.message} timestamp={event.timestamp} />
    })
    return (
        <div className="participants-list">
        <ul>
        {events}
        </ul>
        </div>
    )
}

export default StageList;