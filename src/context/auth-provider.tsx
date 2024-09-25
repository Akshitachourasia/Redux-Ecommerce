import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
