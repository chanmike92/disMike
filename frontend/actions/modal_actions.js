export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';

export const openModal = modal => {
  
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

export const openEditModal = modal => {
  return {
    type: OPEN_EDIT_MODAL,
    modal: Object.assign(modal, { type: OPEN_EDIT_MODAL }),
  };
};

export const closeEditModal = () => {
  return {
    type: CLOSE_EDIT_MODAL,
  };
};
