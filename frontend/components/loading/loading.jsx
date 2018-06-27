import React from 'react';
import { connect, withRouter } from 'react-redux';

const Loading = (props) => {
  const loadingMessages = [
    "Not enough overlords", "We must construct additional Pylons", "Hell.. it's about time!",
    "Get over here!", "Good luck, have fun!", "Loading new loading messages", "ERROR ERROR ERROR!",
    "404 Not Found", "Fire in the Hole!", "Requesting Backup!", "MEDIC! MEDICCCC!",
    "Doing a barrel roll", " I KNO DA WEY", "YOU ARE NOT PREPARED!", "FOR THE HORDE!",
    "FOR THE ALLIANCE!", "Frostmourne Hungers"
  ];
  let currentMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

  const loadingContainer = props.loaded ? "loading-container loaded" : "loading-container";

  return (
    <div className={ loadingContainer }>
      <video className='loading-logo' loop autoPlay>
          <source src='https://s3.amazonaws.com/dismikechan-app-name-dev/discord-load2.webm' type='video/webm'></source>
          <source src='https://s3.amazonaws.com/dismikechan-app-name-dev/discord-load1.mp4' type='video/mp4'></source>
      </video>
      <div className='loading-message-section'>
        <div className="loading-message">{ currentMessage }</div>
        <div className="loading-message">{props.loaded ? "READY" : "LOADING"}</div>
      </div>
    </div>
  );
};

export default Loading;
