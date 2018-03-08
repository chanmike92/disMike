import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ServerFormContainer from '../server/server_form_container';


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'newserver':
      component = <ServerFormContainer />;
      break;
    case 'newchannel':
      component = <ChannelFormContainer />;
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
  return {
    modal: state.ui.modal
  };
};

mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};
