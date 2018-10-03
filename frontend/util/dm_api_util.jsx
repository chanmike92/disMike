export const fetchAllDm = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/dmchannels',
  });
};

export const fetchADm = (id) => {

  return $.ajax({
    method: 'GET',
    url: `api/dmchannels/${id}`,
    data: { id }
  });
};

export const makeNewDm = (id) => {

  return $.ajax({
    url: 'api/dmchannels',
    method: 'POST',
    data: { id }
  });
};

export const updateDm = (id) => {

  return $.ajax({
    url: `api/dmchannels/${id}`,
    method: 'PATCH',
    data: { id }
  });
};

export const unsubscribeDm = (id) => {

  return $.ajax({
    url: `api/dmchannels/${id}`,
    method: 'DELETE',
    data: { id }
  });
};
