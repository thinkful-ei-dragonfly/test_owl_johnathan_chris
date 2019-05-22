import React from 'react';
import Stage from './stage';

function StageList(props) {
    const stageUsers = props.stageUsers.map(user  => {
        return <Stage key={user.id} name={user.name} avatar={user.avatar}/>
    });
    return (
        <div className="stage-list">
        {stageUsers}
        </div>
    )
}

export default StageList;