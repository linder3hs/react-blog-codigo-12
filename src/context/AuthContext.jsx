import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "../service/supabase";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const fetchUser = async () => {
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  };

  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        saveUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
