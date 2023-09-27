import DefaultLayout from "../layouts/default.layout";
import Item from '../components/products/Item';
import withAuth from '../hocs/withAuth';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <DefaultLayout className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <Item></Item>
    </DefaultLayout>
  )
}

export default withAuth(ProductDetail);