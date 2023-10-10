import { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ nickName: 'Anonymous' });

    const getClientUser = () => {
        if (typeof window !== "undefined" && window.localStorage) {
            localStorage.getItem("userToken");
        } else {
            return { nickName: 'Anonymous' };
        }
    };
    useEffect(() => {
        const userToken = getClientUser();
        setUser(userToken);
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
export const useUser = () => useContext(UserContext);