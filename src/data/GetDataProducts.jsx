import { products } from './products';

const GetDataProducts = () => {
  return new Promise((resolve, reject) => {
    // Emulo una petición a una API
    setTimeout(() => {
      resolve(products.products);
    }, 100); // Simulamos un retraso de 2 segundo
  });
}

export default GetDataProducts;
