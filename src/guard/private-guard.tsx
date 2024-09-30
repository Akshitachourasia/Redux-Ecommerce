import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/auth-context";

export const PrivateGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login" />;
};
