import DefaultLayout from "../layouts/default.layout";
import ItemListContainer from '../components/products/ItemListContainer';
import withAuth from '../hocs/withAuth';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNav } from '../contexts/nav.context';

const Category = (props) => {
  const { slug } = useParams();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  const categoriesData = useNav().categories;

  useEffect(() => {
      setCategories(categoriesData);
  }, [categoriesData, slug]);

  useEffect(() => {
    const category = categoriesData.find(data => data.key === slug);
    setCategory(category);
  }, [categories, categoriesData, slug]);

  return (
    <DefaultLayout key={slug} className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <div className="max-w-2xl pt-16 pb-16 mx-auto border-b border-gray-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            {category && category.category}
          </h1>
        </div>
      </div>
      <ItemListContainer category={category}></ItemListContainer>
    </DefaultLayout>
  )
}

export default withAuth(Category);