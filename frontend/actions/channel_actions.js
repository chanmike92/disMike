import * as APIUtil from '../util/channel_api_util';
export const RECEIVE_A_CHANNEL = 'RECEIVE_A_CHANNEL';
export const RECEIVE_NEW_CHANNEL = 'RECEIVE_NEW_CHANNEL';
export const REMOVE_A_CHANNEL = 'REMOVE_A_CHANNEL';
export const CLEAR_STATE = 'CLEAR_STATE';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

export const receiveAllChannels = (channels) => {

  return {
    type: RECEIVE_ALL_CHANNELS,
    channels
  };
};

export const receiveAChannel = (payload) => {

  return {
    type: RECEIVE_A_CHANNEL,
    payload
  };
};

export const addNewChannel = (payload) => {

  return {
    type: RECEIVE_NEW_CHANNEL,
    payload
  };
};

export const receiveErrors = (errors) => {

  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  };
};

export const clearState = () => {

  return {
    type: CLEAR_STATE,
  };
};

export const removeAChannel = (payload) => {

  return {
    type: REMOVE_A_CHANNEL,
    payload,
  };
};

export const fetchAllChannels = (id) => dispatch => {

  return APIUtil.fetchAllChannels(id).then((channels) => dispatch(receiveAllChannels(channels)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const fetchAChannel = (id) => dispatch => {

  return APIUtil.fetchAChannel(id).then((payload) => dispatch(receiveAChannel(payload)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const makeNewChannel = (channel, id) => dispatch => {

  return APIUtil.makeNewChannel(channel, id).then((payload) => dispatch(addNewChannel(payload)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const updateChannel = (channel) => dispatch => {

  return APIUtil.updateChannel(channel).then((payload) => dispatch(receiveAChannel(payload)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const deleteChannel = (channelId, serverId) => dispatch => {

  return APIUtil.deleteChannel(channelId, serverId).then((payload) => dispatch(removeAChannel(payload)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};
