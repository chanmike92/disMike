import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ServerIndexDropdown = (props) => {

    return (
      <div className='server-index-dropdown-container'>
        <div className='dropdown-index-item'>
          <label className='dropdown-index-title'>Edit Profile</label>
        </div>
        <div className='dropdown-divider'></div>
        <div className='dropdown-index-item' onClick={ props.logout }>
          <label className='dropdown-index-title'>Logout</label>
        </div>
      </div>
    );
  // } else {
  //   return (
  //     <div className='server-index-dropdown-container'>
  //       <div className='dropdown-index-item'>
  //         <label className='dropdown-index-title'>Edit Profile</label>
  //       </div>
  //       <div className='dropdown-index-item'>
  //         <label className='dropdown-index-title'>Logout</label>
  //       </div>
  //     </div>
  //   );
  // }
};

export default withRouter(ServerIndexDropdown);
