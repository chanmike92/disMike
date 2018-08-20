export const fetchAllDmchannels = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/channels',
  });
};

export const fetchADmchannel = (id) => {

  return $.ajax({
    method: 'GET',
    url: `api/channels/${id}`,
    data: { id }
  });
};

export const makeNewDmchannel = (dm, id) => {

  return $.ajax({
    url: 'api/channels',
    method: 'POST',
    data: { dm, id }
  });
};

export const unsubscribeDmchannel = (id) => {

  return $.ajax({
    url: `api/channels/${id}`,
    method: 'DELETE',
    data: { id }
  });
};
