import * as APIUtil from '../util/dm_api_util';
export const RECEIVE_A_DM = 'RECEIVE_A_DM';
export const REMOVE_A_DM = 'REMOVE_A_DM';
export const CLEAR_STATE = 'CLEAR_STATE';
export const RECEIVE_ALL_DMS = 'RECEIVE_ALL_DMS';
export const RECEIVE_DM_ERRORS = 'RECEIVE_DM_ERRORS';

export const receiveAllDms = (dms) => {

  return {
    type: RECEIVE_ALL_DMS,
    dms
  };
};

export const receiveADm = (payload) => {

  return {
    type: RECEIVE_A_DM,
    payload
  };
};

export const receiveErrors = (errors) => {

  return {
    type: RECEIVE_DM_ERRORS,
    errors
  };
};

export const clearState = () => {

  return {
    type: CLEAR_STATE,
  };
};

export const removeADm = (id) => {

  return {
    type: REMOVE_A_DM,
    id
  };
};

export const fetchAllDms = (id) => dispatch => {

  return APIUtil.fetchAllDms(id).then((dms) => dispatch(receiveAllDms(dms)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const fetchADm = (id) => dispatch => {

  return APIUtil.fetchADm(id).then((payload) => dispatch(receiveADm(payload)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const makeNewDm = (id) => dispatch => {

  return APIUtil.makeNewDm(id).then((payload) => dispatch(receiveADm(payload)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const updateDm = (dm) => dispatch => {
  return APIUtil.updateDm(dm).then((payload) => dispatch(receiveADm(payload)), (errors) => {
    return dispatch(receiveErrors(errors.responseJSON));});
};

export const unsubscribeDm = (id) => dispatch => {
  return APIUtil.unsubscribeDm(id).then(() => dispatch(removeADm(id)), (errors) => {
    return dispatch(receiveErrors(errors.responseJSON));});
};
