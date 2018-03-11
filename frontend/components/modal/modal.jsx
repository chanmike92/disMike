import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ServerCreateContainer from '../server/server_create_container';
import ChannelCreateContainer from '../channel/channel_create_container';
import ServerJoinContainer from '../server/server_join_container';

const Modal = ({ modal, closeModal }) => {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createServer':
      component =
      <div className='modal-container'>
        <div className='modal-title'>OH, ANOTHER SERVER HUH?</div>
        <div className='modal-form-container'>
          <ServerCreateContainer />
          <ServerJoinContainer />
        </div>
      </div>;
      break;
      case 'createChannel':
      component =
        <div className='modal-container'>
          <div className='modal-title'>Create Channel</div>
          <ChannelCreateContainer />
        </div>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={ closeModal }>
      <div className='modal-child' onClick={ e => e.stopPropagation() }>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const modal = state.ui.modal;


  return {
    modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
