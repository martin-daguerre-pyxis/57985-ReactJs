import DefaultLayout from "../layouts/default.layout";
import withAuth from '../hocs/withAuth';
import ShippingCart from "../components/cart/ShippingCart";

const Cart = (props) => {
    return (
        <DefaultLayout className="flex flex-col justify-around flex-grow layout_home-page font-body">
            <ShippingCart Show={false} asPage={true}></ShippingCart>
        </DefaultLayout>
    )
}

export default withAuth(Cart);
