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

export const makeNewDm = (dm, id) => {

  return $.ajax({
    url: 'api/dmchannels',
    method: 'POST',
    data: { dm, id }
  });
};

export const unsubscribeDm = (id) => {

  return $.ajax({
    url: `api/dmchannels/${id}`,
    method: 'DELETE',
    data: { id }
  });
};
