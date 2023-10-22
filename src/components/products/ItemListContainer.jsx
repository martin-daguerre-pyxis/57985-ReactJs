import { useEffect, useState } from "react";
import ItemList from './ItemList';
import productsDataServiceInstance from "../../services/products";
import ItemAdminList from './ItemAdminList';

const ItemListContainer = ({ category }) => {
    const [dataProducts, setDataProducts] = useState([]);
    const isAdmin = false;
    useEffect(() => {
        const fetchData = async () => {
            setDataProducts(null); // Limpiar el estado antes de la nueva consulta
            let querySnapshot = null;
            try {
                if (category && category.id) {
                    querySnapshot = await productsDataServiceInstance.getCategory(category.id);
                } else {
                    querySnapshot = await productsDataServiceInstance.getAllItems();
                }
                const itemList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setDataProducts(itemList);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        return () => {
            setDataProducts(null);
        }
    }, [category]);



    if (!dataProducts) {
        return (
            <div className="container flex flex-row flex-wrap justify-center gap-3 mx-auto mt-16 mb-16 lg:gap-6 columns-2 lg:columns-3">
                <div className="text-center">
                    <div className="text-lg mt-34">Cargando</div>
                    <div className="relative mx-auto mt-6 mb-36 h-24 w-24 animate-spin rounded-full border-4 border-solid border-deep-purple-500 border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]">
                        <span className="absolute left-1/2 overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"></span>
                    </div>
                </div>
            </div>
        );
    }

    return (<>
        {isAdmin ? <>
            <div className="container mx-auto mt-16 mb-16" >
                <ItemAdminList />
            </div>
        </> : <>
            <div className="container flex flex-row flex-wrap justify-center gap-3 mx-auto mt-16 mb-16 lg:gap-6 columns-2 lg:columns-3">

                {dataProducts.map((product) => (
                    <ItemList
                        key={product.id}
                        props={{
                            id: product.id,
                            title: product.title,
                            description: product.description,
                            price: product.price,
                            thumbnails: product.thumbnails,
                            stock: product.stock,
                            discounts: product.discounts,
                            brand: product.brand,
                            category: product.category,
                            images: product.images,
                            video: product.video,
                        }}
                    />
                ))}
            </div>
        </>}
    </>
    )
}

export default ItemListContainer;