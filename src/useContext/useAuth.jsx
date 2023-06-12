import { createContext, useContext, useState } from "react";
import { ToastContainer } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => {
 const auth = useContext(AuthContext)
 return auth
};

export const Authprovider = ({ children }) => {
  const [isAuthenticated, setisAuthenticated] = useState(true);

  const login = () => {
    setisAuthenticated(true)
  };
  const logout = () => {
    setisAuthenticated(false)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
      <ToastContainer/>
    </AuthContext.Provider>
  );
};
