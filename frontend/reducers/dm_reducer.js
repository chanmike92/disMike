import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';
import { RECEIVE_A_DM, RECEIVE_ALL_DMS, REMOVE_A_DM } from '../actions/dm_actions';
import { RECEIVE_A_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';


const dmReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER_SESSION:
      return merge({}, oldState, action.payload.dms);
    case RECEIVE_ALL_DMS:
      return merge({}, oldState, action.dms);
    case RECEIVE_A_DM:
      return merge({}, oldState, action.payload.dms);
    case RECEIVE_A_MESSAGE:
      if (action.message.messagable_type === 'Dmchannel') {
        const id = action.message.id;
        const messagableId = action.message.messagable_id;
        const updatedChannel = {[messagableId]: {message_ids: [...oldState[messagableId].message_ids, id], subscription: true}};

        return merge({}, oldState, updatedChannel);
      }
    case REMOVE_A_DM:
      let dm = oldState[action.id];
      dm.subscription = false;

      return merge({}, oldState, { [action.id]: dm });
    default:
      return oldState;
  }
};

export default dmReducer;
