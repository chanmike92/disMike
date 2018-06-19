import React from 'react';
import { closeDropdown } from '../../actions/dropdown_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FriendAddContainer from '../friend_list/friend_add_container';
import LogoutConfirmation from '../greeting/logout_confirmation';

const Dropdown = ({ dropdown, serverId, server, channelId, channel, closeDropdown }) => {

  if (!dropdown) {
    return null;
  }
  let component;
  switch (dropdown) {
      case 'server':
        component =
        <div className='dropdown-container'>
            <ServerUpdateContainer server={ server }/>
        </div>;
      break;
      case 'logout':
        component =
        <div className='dropdown-container'>
          <LogoutConfirmation />
        </div>;
      break;
    default:
      return null;
  }

  return (
    <div className="dropdown-background" onClick={ closeDropdown }>
      <div className='dropdown-child' onClick={ e => e.stopPropagation() }>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const dropdown = state.ui.dropdown;
  const serverId = (ownProps.location.pathname.split('/')[1]);
  const server = state.entities.servers[serverId] || {};
  const channelId = (ownProps.location.pathname.split('/')[2]);
  const channel = state.entities.channels[channelId] || {};
  return {
    dropdown,
    server,
    serverId,
    channel,
    channelId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dropdown));
