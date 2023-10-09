import { useContext } from 'react';
import { CategoriesContext } from '../contexts/categories.context';

const Componnte3 = () => {
  const miContext = useContext(CategoriesContext);

  return (
    <div className='p-5 m-5 border border-red-400'>
      <div className='pb-5'>
        <div className='text-3xl'>Componnte3</div>
        <div className='text-base'>{miContext.productList}</div>
        <button className='p-3 mt-2 bg-gray-400' onClick={() => miContext.setProductList("Otro Producto")}>
          Cambiar producto
        </button>
        <br />
        <button className='p-3 mt-2 bg-gray-400' onClick={() => miContext.setProductList({ ...miContext.productList, name: "Adrian" })}>
          Cambiar nombre
        </button>
      </div>
    </div>
  );
};

export default Componnte3;
