export const fetchAllDm = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/dms',
  });
};

export const fetchADm = (id) => {

  return $.ajax({
    method: 'GET',
    url: `api/dms/${id}`,
    data: { id }
  });
};

export const makeNewDm = (dm, id) => {

  return $.ajax({
    url: 'api/dms',
    method: 'POST',
    data: { dm, id }
  });
};

export const unsubscribeDm = (id) => {

  return $.ajax({
    url: `api/dms/${id}`,
    method: 'DELETE',
    data: { id }
  });
};
