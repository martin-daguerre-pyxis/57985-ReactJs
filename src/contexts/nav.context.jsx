import { createContext, useEffect, useState, useContext } from "react";
import categoriesDataServiceInstance from '../services/categories';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await categoriesDataServiceInstance.getAllItems();
                const itemList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setCategories(itemList);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
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
export const useNav = () => useContext(NavContext);

export const useGetCategoryName = ({ id = 0 }) => {
    const list = useNav().categories;
    if (id) {
        // eslint-disable-next-line eqeqeq
        const categoryData = list.find(data => data.id == id);
        const name = categoryData ? categoryData.category : null;
        return name;
    }
};