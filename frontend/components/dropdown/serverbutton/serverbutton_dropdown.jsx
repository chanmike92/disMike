import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ServerButtonDropdown = (props) => {


    return (
      <div className='context-dropdown-index-container'>
        <div className='dropdown-index-item' onClick={props.openCreateModal }>
          <label className='dropdown-index-title'>Join a Server</label>
        </div>
        <div className='dropdown-divider'></div>
        <div className='dropdown-index-item' onClick={ props.openJoinModal }>
          <label className='dropdown-index-title'>Create a Server</label>
        </div>
      </div>
    );
};

export default withRouter(ServerButtonDropdown);
