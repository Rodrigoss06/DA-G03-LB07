import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Jesse Hall');

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  return (
    <UserContext.Provider value={{ user, handleChangeUser }}>
      {children}
    </UserContext.Provider>
  );
};
