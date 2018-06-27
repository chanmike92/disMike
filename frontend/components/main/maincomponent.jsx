import React from 'react';
import { connect, withRouter } from 'react-redux';
import ChannelShowContainer from '../channel/channel_show_container';
import DmChannelShowContainer from '../dmchannel/dmchannel_show_container';
import LoadingContainer from '../loading/loading_container';
import ServerShowContainer from '../server/server_show_container';
import { closeDropdown } from '../../actions/dropdown_actions';

export const MainComponent = (props) => {
  const subComponent = props.serverId === '@me' ?
  <DmChannelShowContainer
    serverId={ props.serverId }
    channelId={ parseInt(props.channelId) }
  />
  :
  <ChannelShowContainer
    serverId={ props.serverId }
    channelId={ props.channelId }
  />;


  const dropdown = props.dropdown === false ? () => console.log() : props.closeDropdown;

  return (
    <div className='maincomponent-container' onClick={ dropdown }>
      <LoadingContainer />

      <ServerShowContainer />
      { subComponent }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const serverId = (ownProps.serverId);
  const channelId = (ownProps.channelId);
  const dropdown = state.ui.dropdown;
  return ({
    dropdown,
    currentUser: state.session.user || {},
    channelId,
    serverId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    closeDropdown: (e) => {
      e.stopPropagation();
      dispatch(closeDropdown());
    },
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
