/* eslint-disable eqeqeq */
import { products } from './products';

const GetDataProduct = (id) => {

  return new Promise((resolve, reject) => {

    // fetch('http://localhost:3000/api/categories')
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    //     .catch(err => console.log(err));

    // Emulo una petición a una API
    setTimeout(() => {
      if (id) {
        const res = products.data.find(data => data.id == id);
        resolve(res);
      } else {
        resolve(products.data);
      }
    }, 500); // Simulamos un retraso...
  });
}

export default GetDataProduct;
