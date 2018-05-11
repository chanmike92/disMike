import React from 'react';

const Loading = () => {

  return (
    <div className='loading-container'>
      <video className='loading-logo' loop autoPlay>
          <source src='https://s3.amazonaws.com/dismikechan-app-name-dev/discord-load2.webm' type='video/webm'></source>
          <source src='https://s3.amazonaws.com/dismikechan-app-name-dev/discord-load1.mp4' type='video/mp4'></source>
      </video>
      <div className='loading-message'>
        <div>Loading</div>
        <div>Message</div>
      </div>

    </div>
  );
};

export default Loading;
