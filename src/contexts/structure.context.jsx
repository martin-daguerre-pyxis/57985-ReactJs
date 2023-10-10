import { useEffect, useState, createContext, useContext } from "react";

export const StructureContext = createContext();

export const StructureProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setShowMenu(false);
    }, []);

    const actions = {
        setShowMenu: (value) => {
            setShowMenu(value);
        }
    };

    return (
        <StructureContext.Provider value={{
            showMenu,
            actions
        }}>
            {children}
        </StructureContext.Provider>
    );
}
export const useStructure = () => useContext(StructureContext);