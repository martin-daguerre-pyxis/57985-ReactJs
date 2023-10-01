import DefaultLayout from "../layouts/default.layout";
import ItemListContainer from '../components/products/ItemListContainer';
import withAuth from '../hocs/withAuth';
import { useParams } from 'react-router-dom';

const Category = (props) => {
  const { categoryId, slug } = useParams();

  return (
    <DefaultLayout auth={props.auth} store={props.store} className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <ItemListContainer></ItemListContainer>
    </DefaultLayout>
  )
}

export default withAuth(Category);