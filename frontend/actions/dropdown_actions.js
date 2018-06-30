export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';

export const openDropdown = payload  => {

  return {
    type: OPEN_DROPDOWN,
    payload,
  };
};

export const closeDropdown = () => {
  return {
    type: CLOSE_DROPDOWN,
  };
};
