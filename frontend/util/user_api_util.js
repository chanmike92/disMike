export const fetchAllUsers = (id) => {

  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: {id}
  });
};

export const fetchAUser = (id) => {

  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
  });
};
