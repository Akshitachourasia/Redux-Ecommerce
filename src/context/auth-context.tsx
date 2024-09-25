import { createContext } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: (email, password) => {},
  logout: () => {},
});
export default AuthContext;