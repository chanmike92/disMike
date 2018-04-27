export const fetchAllFriends = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/channels',
  });
};

export const addNewFriend = (id) => {

  return $.ajax({
    url: 'api/channels',
    method: 'POST',
    data: { id }
  });
};

export const deleteFriend = (id) => {

  return $.ajax({
    url: `api/channels/${id}`,
    method: 'DELETE',
    data: { id }
  });
};
