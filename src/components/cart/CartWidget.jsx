// import { Link } from 'react-router-dom';
import ShippingCart from './ShippingCart';

const CartWidget = ({ context }) => {
    return (<>
        <ShippingCart Show={false} asPage={false}></ShippingCart>
    </>);
}

export default CartWidget;