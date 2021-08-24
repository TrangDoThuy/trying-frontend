import React from 'react';

export default React.createContext({
  jwt: null,
  userId: null,
  login: () => {},
  logout: () => {},
});
