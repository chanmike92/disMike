import * as APIUtil from '../util/message_api_util';
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_A_MESSAGE = 'RECEIVE_A_MESSAGE';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const receiveAllMessages = (messages) => {

  return {
    type: RECEIVE_ALL_MESSAGES,
    messages
  };
};

export const receiveAMessage = (message) => {
  return {
    type: RECEIVE_A_MESSAGE,
    message
  };
};

export const receiveErrors = (errors) => {

  return {
    type: RECEIVE_MESSAGE_ERRORS,
    errors
  };
};

export const clearMessages = () => {

  return {
    type: CLEAR_MESSAGES
  };
};


export const fetchAllMessages = (id) => dispatch => {

  return APIUtil.fetchAllMessages(id).then((messages) => dispatch(receiveAllMessages(messages)))
};

export const makeNewMessage = (message) => dispatch => {

  return APIUtil.makeNewMessage(message).then((message) => dispatch(receiveAMessage(payload)));
};
