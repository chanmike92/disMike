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

export const fetchCurrentUser = (id) => {

  return $.ajax({
    method: 'POST',
    url: 'api/users/payload',
    data: {id}
  });
};

export const updateAUser = (formData, id) => {

  return $.ajax({
    method: 'PATCH',
    url: `api/users/${ id }`,
    processData: false,
    contentType: false,
    data: formData
  });
};
