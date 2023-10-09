import { useState } from 'react';
import { products } from '../data/products';
import Componet2 from './Componnte2';
import Componet3 from './Componnte3';

const Componnte1 = () => {

  return (
    <div className='p-5 m-5 border border-red-400'>
      <div className='pb-5'>Componnte1</div>
      <Componet2></Componet2>
      <Componet3></Componet3>
    </div>
  )
}

export default Componnte1