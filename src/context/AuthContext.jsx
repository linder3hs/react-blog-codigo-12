import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "../service/supabase";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
