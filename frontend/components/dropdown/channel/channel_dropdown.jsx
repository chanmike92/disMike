import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelDropdown = (props) => {

  // const channelCreate = (props.server.owner_id === props.currentUser.id) ?
  // <div className='dropdown-index-item' onClick={ props.logout }>
  //   <label className='dropdown-index-title'>Create Channel</label>
  // </div> : <div></div>;


    return (
      <div className='server-index-dropdown-container'>
        <div className='dropdown-index-item'>
          <label className='dropdown-index-title'>Invite Users</label>
        </div>
        <div className='dropdown-index-item' onClick={ props.logout }>
          <label className='dropdown-index-title'>Create Channel</label>
        </div> : <div></div>;
      </div>
    );
};

export default withRouter(ChannelDropdown);
