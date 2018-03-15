import { RECEIVE_A_USER, RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { merge } from 'lodash';


const userReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_A_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_A_SERVER:
      return merge({}, oldState, action.payload.users);
    default:
      return oldState;
  }
};

export default userReducer;
