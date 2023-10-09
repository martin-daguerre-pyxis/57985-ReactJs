import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [saludo, setSaludo] = useState("Hola mundo");
    // const [role, setRole] = useState({ id: 1, level: 1, name: 'ANONYMOUS', isAuthenticated: false });

    // useEffect(() => {
    //     setRole({
    //         id: 2,
    //         level: 3,
    //         name: 'DBUSER',
    //         isAuthenticated: true,
    //     });
    // }, []);

    return (
        <AuthContext.Provider value={{ saludo, setSaludo }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
