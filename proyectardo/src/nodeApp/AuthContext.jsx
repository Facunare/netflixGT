// AuthContext.js
import { createContext, useState, useContext, useEffect } from "react";
import Cookies from 'js-cookie'
import { loginRequest, registerRequest, verifyTokenRequest } from "../nodeApp/auth.js";
export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true)


  const signup = async (user) => {
    try {
      const res = await registerRequest(user);

 
        setUser(res.data);
        setIsAuthenticated(true);

    } catch (error) {
      console.error("Error in signup:", error);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
  
   
        setUser(res.data);
        setIsAuthenticated(true);
    } catch (error) {
      console.error("Error in signin:", error);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };
  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        console.log(cookies.token)
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
       setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);



  return (
    <AuthContext.Provider
    value={{
      user,
      signup,
      signin,
      logout,
      isAuthenticated,
      loading,
    }}
  >
    {children}
  </AuthContext.Provider>
  );
};

export default AuthContext;
