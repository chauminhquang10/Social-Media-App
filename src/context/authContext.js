import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("loginStatus") ?? true
  );

  useEffect(() => {
    localStorage.setItem("loginStatus", isLogged);
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
