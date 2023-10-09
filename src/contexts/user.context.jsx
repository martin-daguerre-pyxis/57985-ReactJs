import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ nickName: 'Anonymous' });

    useEffect(() => {
        setUser({
            name: 'Martín',
            nickName: 'martin.daguerre',
            lastName: 'Daguerre',
            email: 'martin.daguerre@gmail.com',
            phone: '098919286',
            country: 'Uruguay',
            address: '18 de Julio 1234',
            city: 'Montevideo',
            state: 'Montevideo',
            zip: '11200'
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserProvider;