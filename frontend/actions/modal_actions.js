export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_PAGE_MODAL = 'OPEN_PAGE_MODAL';

export const openModal = modal => {
  debugger
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const openPageModal = pageModal => {
  return {
    type: OPEN_PAGE_MODAL,
    modal: Object.assign(pageModal, { type: OPEN_PAGE_MODAL }),
  };
};
//
// export const closeEditModal = () => {
//   return {
//     type: CLOSE_EDIT_MODAL,
//   };
// };
