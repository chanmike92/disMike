import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ServerCreateContainer from '../server/server_create_container';
import ChannelCreateContainer from '../channel/channel_create_container';
import ChannelUpdateContainer from '../channel/channel_update_container';
import ServerJoinContainer from '../server/server_join_container';

const EditModal = ({ modal, props, closeModal }) => {

  if (!modal) {
    return null;
  }
  let component = null;
  if (modal.type === 'OPEN_EDIT_MODAL') {

    component =
        <div className='modal-container' on>
          <div className='modal-title'>Update Channel</div>
          <ChannelUpdateContainer currentState={ modal }/>
        </div>;

      return (
        <div className="modal-background" onClick={ closeModal }>
          <div className='modal-child' onClick={ e => e.stopPropagation() }>
            { component }
          </div>
        </div>
      );

  } else {
    return null;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    props: ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditModal));
