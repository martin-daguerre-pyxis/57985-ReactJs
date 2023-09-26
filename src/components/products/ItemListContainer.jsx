import { useEffect, useState } from "react";
import GetDataProducts from '../../data/GetDataProducts';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    const [dataProducts, setDataProducts] = useState(null);

    useEffect(() => {
        GetDataProducts().then(productsData => {
            setDataProducts(productsData);
        });
    }, []);

    const addToCart =()=>{
        
    }

    if (!dataProducts) return (
        <div className="inline-block mx-auto my-6 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
    );

    return (<>
        <div className="container flex flex-row flex-wrap justify-center gap-6 mx-auto mt-16 mb-16 columns-3">
            {dataProducts.map((product) => (
                <ItemList
                    key={product.id}
                    addToCart={addToCart}
                    props={{
                        id: product.id,
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        pictureUrl: product.pictureUrl,
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
    </>
    )
}

export default ItemListContainer;