import React, {useContext, createContext, useState, useEffect} from 'react';
import API from '../util/API';

const authContext = createContext();

export function ProvideAuth({children}) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const isLoggedIn = user !== null;

  useEffect(() => {
    API.auth.getUser()
        .then(({data}) => setUser(data))
        .catch(() => setUser(null));
  }, []);

  const login = (body) => {
    return new Promise((resolve, reject) => {
      API.auth.loginUser(body)
          .then(({data}) => resolve(data))
          .catch(({response}) => reject(response));
    });
  };

  const logout = () => API.auth.logoutUser().then(() => setUser(null));

  return {
    isLoggedIn,
    user,
    login,
    logout,
  };
}
