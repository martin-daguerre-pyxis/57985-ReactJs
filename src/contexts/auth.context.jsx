import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState({ id: 1, level: 1, name: 'ANONYMOUS', isAuthenticated: false });

    useEffect(() => {
        setRole({
            id: 2,
            level: 3,
            name: 'DBUSER',
            isAuthenticated: true,
        });
    }, []);

    const login = () => {
        setRole({
            id: 3,
            level: 5,
            name: 'ADMIN',
            isAuthenticated: true,
        });
    };

    const logout = () => {
        setRole({
            id: 1,
            level: 1,
            name: 'ANONYMOUS',
            isAuthenticated: false,
        });
    };

    return (
        <AuthContext.Provider value={{ role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);