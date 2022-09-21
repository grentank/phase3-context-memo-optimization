import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth, setAuthUser } from '../redux/actions/userActions';

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
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
      .then((res) => {
        setUser(res.data);
        dispatch(setAuthUser(res.data));
      })
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
