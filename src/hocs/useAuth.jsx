import { useState } from "react";

const data = [
    { user: 'admin@sitio.com', password: '1234' }, { user: 'usuario@sitio.com', password: "1234" }
];

const useAuth = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (user, password) => {
        const foundUser = data.find(
            (u) => u.user === user && u.password === password
        );
        if (foundUser) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    }

    const signup = (name, lastname, email, password, phone) => {
        console.log('Registrando usuario:', {
            name, lastname, email, password, phone,
        });
    }

    const changePassword = (lastPass, newPass) => {
        console.log('Cambiando contraseña:', { lastPass, newPass })
    }

    return { isAuthenticated, login, logout, signup, changePassword };
}

export default useAuth;
