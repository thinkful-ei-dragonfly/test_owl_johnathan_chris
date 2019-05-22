import React from 'react';
import STORE from '../store.js';


function ChatEvent(props) {
  let chatEvent;
  let type = props.type;
  const name = STORE.Participants.find(element => 
    (element.id === parseInt(props.participantId, 10))
  ).name;
  const avatar = STORE.Participants.find(element => {
    return (element.id === parseInt(props.participantId, 10));
  }).avatar;

  switch (type) {
    case 'message':
      chatEvent =
      <div>
        <img src={avatar} alt="avatar-img" />
        <p>{name}</p>
        <p>{props.timestamp}</p>
        <p>{props.message}</p>
      </div>;

      break;

    case 'thumbs-up':
      chatEvent =
      <div>
        <p>{props.timestamp}</p>
        <p>{name} gave a thumbs up &#128077</p>
      </div>;

      break;

    case 'thumbs-down':
      chatEvent =
      <div>
        <p>{props.timestamp}</p>
        <p>{name} gave a thumbs down &#128078</p>
        </div>;

        break;
      
    case 'raise-hand':
      chatEvent =
        <div>
          <p>{props.timestamp}</p>
          <p>{name} raised their hand</p>
          </div>;

          break;
    
    case 'clap':
      chatEvent =
        <div>
          <p>{props.timestamp}</p>
          <p>{name} clapped</p>
          </div>;

          break;
    
    case 'join':
      chatEvent =
        <div>
          <p>{props.timestamp}</p>
          <p>{name} joined</p>
          </div>;

          break;
    
    case 'leave':
      chatEvent =
        <div>
          <p>{props.timestamp}</p>
          <p>{name} left</p>
          </div>;

          break;

    case 'join-stage':
      chatEvent =
        <div>
          <p>{props.timestamp}</p>
          <p>{name} joined the stage</p>
          </div>;

          break;

    case 'leave-stage':
      chatEvent =
        <div>
          <p>{props.timestamp}</p>
          <p>{name} left the stage</p>
          </div>
      ;

      break;
    
    default:
      chatEvent = null;
  }
  return chatEvent;
}

export default ChatEvent;
