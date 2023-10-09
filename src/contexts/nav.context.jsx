import { createContext, useEffect, useState } from "react";
import GetDataCategories from "../data/GetDataCategories";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {

    const [categories, setCategories] = useState([
        { id: 1, name: 'Cargando...' },
        { id: 2, name: 'Categoria 2' },
        { id: 3, name: 'Categoria 3' }
    ]);

    useEffect(() => {
        GetDataCategories().then(data => {
            setCategories(data);
        });
    }, []);

    return (
        <NavContext.Provider value={{
            categories,
            setCategories
        }}>
            {children}
        </NavContext.Provider>
    );
}