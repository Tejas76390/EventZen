import { createContext, useState, useEffect } from "react";
import { getUser, getToken, login as loginService, logout } from "./auth/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(getUser());
    }
  }, []);

  const handleLogin = async ({ email, password }) => {
    try {
      const loggedInUser = await loginService(email, password);
      if (loggedInUser) {
        setUser(getUser()); // Set decoded user from token
        return loggedInUser;
      }
      return null;
    } catch (err) {
      throw err;
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};



