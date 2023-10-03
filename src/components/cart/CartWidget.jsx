// import { Link } from 'react-router-dom';
import ShippingCart from './ShippingCart';

const CartWidget = ({ context }) => {
    return (<>
        <ShippingCart context={context} Show={false} asPage={false}></ShippingCart>
    </>);
}

export default CartWidget;