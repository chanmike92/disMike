import * as APIUtil from '../util/channel_api_util';
export const RECEIVE_A_CHANNEL = 'RECEIVE_A_CHANNEL';
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

export const receiveErrors = (errors) => {

  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  };
};


export const fetchAllChannels = (id) => dispatch => {

  return APIUtil.fetchAllChannels(id).then((channels) => dispatch(receiveAllChannels(channels)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const fetchAChannel = (id) => dispatch => {

  return APIUtil.fetchAChannel(id).then((payload) => dispatch(receiveAChannel(payload)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const makeNewChannel = (channel) => dispatch => {

  return APIUtil.makeNewChannel(channel).then((payload) => dispatch(receiveAChannel(payload)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateChannel = (channel) => dispatch => {
  return APIUtil.updateChannel(channel).then((payload) => dispatch(receiveAChannel(payload)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteChannel = (id) => dispatch => {

  return APIUtil.deleteChannel(id).then((channels) => dispatch(receiveAllChannels(channels)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};
