import DefaultLayout from "../layouts/default.layout";
import withAuth from '../hocs/withAuth';
import ShippingCart from '../components/cart/ShippingCart';

const Checkout = (props) => {

  return (
    <DefaultLayout className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <ShippingCart></ShippingCart>
    </DefaultLayout>
  )
}

export default withAuth(Checkout);