import DefaultLayout from "../layouts/default.layout";
import ItemListContainer from '../components/products/ItemListContainer';
import withAuth from '../hocs/withAuth';

const Category = () => {
  return (
    <DefaultLayout className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <ItemListContainer></ItemListContainer>
    </DefaultLayout>
  )
}

export default withAuth(Category);