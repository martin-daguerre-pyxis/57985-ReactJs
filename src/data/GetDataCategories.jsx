/* eslint-disable eqeqeq */
import { categories } from './categories';

const GetDataCategories = (id) => {

  return new Promise((resolve, reject) => {

    // fetch('http://localhost:3000/api/categories')
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    //     .catch(err => console.log(err));

    // Emulo una petición a una API
    if (id) {
      const res = categories.find(data => data.id == id);
      resolve(res);
    } else {
      resolve(categories);
    }
  });
}

export default GetDataCategories;
