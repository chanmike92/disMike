export const fetchAllDmChannels = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/channels',
  });
};

export const fetchADmChannel = (id) => {

  return $.ajax({
    method: 'GET',
    url: `api/channels/${id}`,
    data: { id }
  });
};

export const makeNewDmChannel = (dm, id) => {

  return $.ajax({
    url: 'api/channels',
    method: 'POST',
    data: { dm, id }
  });
};

export const unsubscribeDmChannel = (id) => {

  return $.ajax({
    url: `api/channels/${id}`,
    method: 'DELETE',
    data: { id }
  });
};
