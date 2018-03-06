export const signup = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/user',
    data
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE',
    }
  );
};
