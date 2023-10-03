/* eslint-disable eqeqeq */
import { categories } from './categories';

const GetDataCategories = (id) => {

  return new Promise((resolve, reject) => {
    // Emulo una petición a una API
    setTimeout(() => {
      // console.log(id);
      if (id) {
        const res = categories.find(data => data.id == id);
        // console.log(res);
        resolve(res);
      } else {
        resolve(categories);
      }
    }, 20); // Simulamos un retraso...
  });
}

export default GetDataCategories;
