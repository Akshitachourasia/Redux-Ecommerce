import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string, password: string) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email, password, isAuthenticated: true })
    );
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout , user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
