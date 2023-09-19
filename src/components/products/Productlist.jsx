import { useEffect } from "react";
import ProductItem from './ProductItem';
import GetDataProducts from '../../data/GetDataProducts';

const Productlist = () => {
    useEffect(() => {
        const dataProducts = GetDataProducts;
        setInterval(() => {
            
        }, 2000);
        return () => {
            console.log('Desmontado');
        }
    }, [])
    const item = {
        "id": 6,
        "title": "MacBook Pro",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 1749,
        "discountPercentage": 11.02,
        "rating": 4.57,
        "stock": 83,
        "brand": "Apple",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
        "images": [
            "https://i.dummyjson.com/data/products/6/1.png",
            "https://i.dummyjson.com/data/products/6/2.jpg",
            "https://i.dummyjson.com/data/products/6/3.png",
            "https://i.dummyjson.com/data/products/6/4.jpg"
        ]
    };
    const itemProduct = {
        id: item.id,
        imgSrc: item.thumbnail,
        imgAlt: item.brand,
        productName: item.title,
        productDesc: item.description,
        productPrice: item.price,
        productStock: item.stock,
        category: item.category
    };
    return (
        <div className="container mx-auto mt-16 mb-16">
            <ProductItem props={itemProduct}></ProductItem>
        </div>
    )
}

export default Productlist;