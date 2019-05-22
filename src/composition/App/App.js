import React from 'react';
import StageList from '../stage/stageList.js';
import STORE from '../store.js';
import ChatList from '../chat/chatList.js'
import Participants from '../Participants/participants.js';


function App(props) {
  const usersOnStage = STORE.Participants.filter(participant => participant.onStage === true);
  console.log(usersOnStage);
  const chat = STORE.ChatEvents;
  return (
    <main className='App'>
      <div className="side-bar">
      <ChatList events={chat}/>
      <Participants participants={STORE.Participants}/>
      </div>
      <StageList stageUsers={usersOnStage} />
    </main>
  );
}

export default App;