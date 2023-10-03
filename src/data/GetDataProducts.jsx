/* eslint-disable eqeqeq */
import { products } from './products';

const GetDataProducts = (filter, value) => {

  return new Promise((resolve, reject) => {
    // Emulo una petición a una API

    let res = [];
    // filter = 'category';
    // value = 1;

    setTimeout(() => {
      // console.log(id);
      if (value) {
        switch (filter) {
          case 'category':
            res = products.data.filter(data => data.category == value);
            break;
          case 'product':
            res = products.data.find(data => data.id == value);
            break;

          case 'price':
            res = products.data.find(data => data.price == value);
            break;

          default:
            res = products.data.find(data => data.id == value);
            break;
        }
        resolve(res);
      } else {
        resolve(products.data);
      }
    }, 2000); // Simulamos un retraso...
  });
}

export default GetDataProducts;
