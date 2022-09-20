import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.post('/api/user/check')
      .then((res) => setUser(res.data))
      .catch(console.log);
  }, []);

  const signupHandler = (e, inputs) => {
    e.preventDefault();
    axios.post('/api/user/signup', inputs)
      .then((res) => setUser(res.data))
      .catch(console.log);
  };

  const loginHandler = (e, inputs) => {
    e.preventDefault();
    axios.post('/api/user/login', inputs)
      .then((res) => setUser(res.data))
      .catch(console.log);
  };

  const logoutHandler = () => {
    axios('/api/user/logout')
      .then(() => setUser({}))
      .catch(console.log);
  };
  return (
    <UserContext.Provider value={{
      user, signupHandler, loginHandler, logoutHandler,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
