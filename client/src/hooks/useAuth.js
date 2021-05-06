import React, {createContext, useContext, useEffect, useState} from 'react';
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
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = user !== null;

  useEffect(() => {
    API.auth.getUser()
        .then(({data}) => {
          if (Object.keys(data).length > 0) {
            setUser(data);
          }
          setIsLoading(false);
        })
        .catch(() => setUser(null));
  }, []);

  const login = (body) => {
    API.auth.loginUser(body).then(({data}) => {
      setUser(data);
    });
  };

  const logout = () => API.auth.logoutUser().then(() => {
    setUser(null);
  });

  return {
    isLoggedIn,
    user,
    login,
    logout,
    isLoading,
  };
}
