import { createContext, useState } from "react";

export const UserContext = createContext();

export default function AuthProvider({ children }) {
  const isUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(isUser !== null ? isUser : {});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
