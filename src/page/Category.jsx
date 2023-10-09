import DefaultLayout from "../layouts/default.layout";
import ItemListContainer from '../components/products/ItemListContainer';
import withAuth from '../hocs/withAuth';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Category = (props) => {
  const { categoryId, slug } = useParams();
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState([]);

  useEffect(() => {
    setCategory(categoryId);
    setCategoryName(slug);
  }, [category, categoryId, slug]);

  return (
    <DefaultLayout key={categoryId} className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <div className="max-w-2xl pt-16 pb-16 mx-auto border-b border-gray-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            {categoryName}
          </h1>
        </div>
      </div>
      <ItemListContainer category={category} slug={categoryName}></ItemListContainer>
    </DefaultLayout>
  )
}

export default withAuth(Category);