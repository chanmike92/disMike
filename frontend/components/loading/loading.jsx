import React from 'react';

const Loading = () => {

  return (
    <div className='loading-container'>
      <video loop autoPlay>
          <source src='/assets/images/discord-load2.webm' type='video/webm'></source>
          <source src='/assets/images/discord-load1.mp4' type='video/mp4'></source>
      </video>

      <div className='loading-message'>
        <div>Loading</div>
        <div>Message</div>
      </div>

    </div>
  );
};

export default Loading;
