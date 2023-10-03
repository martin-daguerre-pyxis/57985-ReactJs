import DefaultLayout from "../layouts/default.layout";
import withAuth from '../hocs/withAuth';
import ShippingCart from "../components/cart/ShippingCart";

const Cart = (props) => {
    const context = {
      auth: props.auth,
      store: props.store
    };
    return (
        <DefaultLayout context={context} className="flex flex-col justify-around flex-grow layout_home-page font-body">
            <ShippingCart context={context}  Show={false} asPage={true}></ShippingCart>
        </DefaultLayout>
    )
}

export default withAuth(Cart);
