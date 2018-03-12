import { RECEIVE_ALL_MESSAGES, RECEIVE_A_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';


const messageReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages
    case RECEIVE_A_MESSAGE:
      return merge({}, oldState, { [action.message.id]: action.message });
    default:
      return oldState;
  }
};

export default messageReducer;
