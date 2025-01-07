import React, { createContext, useContext, useState, useEffect } from "react";

// Create context for user data
const UserContext = createContext();

// Custom hook to access the user context
export const useUserContext = () => useContext(UserContext);

// Provider component to manage the user state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState();

  // Check if the user's emkkail ends with '@e-polytechnique.ma'
  useEffect(() => {
    if (user && user.email.endsWith("@e-polytechnique.ma")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
};
