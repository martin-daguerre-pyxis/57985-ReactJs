/* eslint-disable eqeqeq */
import { products } from './products';

const GetDataProducts = (id) => {

  return new Promise((resolve, reject) => {
    // Emulo una petición a una API
    setTimeout(() => {
      // console.log(id);
      if (id) {
        const res = products.data.find(data => data.id == id);
        console.log(res);
        resolve(res);
      } else {
        resolve(products.data);
      }
    }, 2000); // Simulamos un retraso...
  });
}

export default GetDataProducts;
