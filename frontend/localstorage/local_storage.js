export const loadServer = () => {
  try {
    const server = localStorage.getItem('server');
    if (server === null) {
      return undefined;
    }
    return server;
  }
    catch (error) {
      return undefined;
  }
};

export const loadChannel = () => {
  try {
    const channel = localStorage.getItem('channel');
    if (channel === null) {
      return undefined;
    }
    return channel;
  }
    catch (error) {
      return undefined;
  }
};
