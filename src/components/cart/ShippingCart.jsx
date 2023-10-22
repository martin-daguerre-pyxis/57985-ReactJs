import { useState } from "react";
import ItemCart from './ItemCart';
import { useCart } from '../../contexts/cart.context';
import useCurrency from '../../hooks/currency';
import { Link } from 'react-router-dom';

const ShippingCart = ({ Show = false, asPage }) => {
    const [show, setShow] = useState(Show);
    const page = asPage ? asPage : false;
    const useCartContext = useCart();
    const listCart = useCartContext.cart;

    return (
        <>
            {!page && (
                <button onClick={() => setShow(!show)} className="relative inline-flex items-center px-3 pt-4 pb-3 text-base border-0 bg-purple-300/40 rounded-t-xl top-2 focus:outline-none hover:bg-[aliceblue] md:-my-1  -mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-8 fill-purple-100" viewBox="0 0 1024 1024">
                        <path d="M352 831a64 64 0 1 0 0 128 64 64 0 0 0 0-128zm447 0a64 64 0 1 0 0 128 64 64 0 0 0 0-128zm64-32H343c-46 0-86-36-92-83l-54-381-31-179c-2-15-16-28-30-28H95a32 32 0 0 1 0-64h41c47 0 88 36 93 83l31 178 54 383c2 15 16 28 29 28h520a32 32 0 1 1 0 63zM383 672a32 32 0 0 1-2-64l434-32c16 0 29-13 31-27l50-288c1-11-2-23-8-30-4-5-9-7-15-7H319a32 32 0 0 1 0-64h554c24 0 47 10 63 29 19 21 27 50 24 81l-51 288c-5 45-46 82-92 82l-431 31-3 1zm0 0" />
                    </svg>
                    <span className="h-8 p-2 leading-none text-white bg-orange-600 rounded-3xl">{useCartContext.totalItems}</span>
                </button>
            )}
            {show && (
                <div className="fixed top-0 left-0 w-full h-full overflow-x-hidden bg-black bg-opacity-40 sticky-0" id="chec-div">
                    <div className="absolute right-0 z-10 w-1/3 h-full max-w-screen-sm overflow-x-hidden transition duration-700 ease-in-out transform translate-x-0" id="checkout">
                        <div className="flex flex-col justify-between h-screen bg-white" id="cart">
                            <div className="px-6 py-4">
                                <div className="absolute flex items-center text-black cursor-pointer top-10 right-4 hover:text-gray-600" onClick={() => setShow(!show)}>
                                    <p className="pl-2 text-xl font-bold leading-none">cerrar</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 rotate-180 icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                </div>
                                <p className="pt-3 pb-2 text-5xl font-black leading-10 text-purple-700">Carrito</p>
                            </div>
                            <div className="w-full h-auto flex-grow py-0 overflow-x-hidden px-6 max-h-[60vh]" id="scroll">
                                <div className="list">
                                    {listCart.map((item) => (
                                        <ItemCart key={item.id} item={item}></ItemCart>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full h-auto bg-gray-100">
                                <Resumen></Resumen>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {page && (
                <div className="relative right-0 w-full mx-auto sm:container" id="checkout">
                    <div className="flex flex-row justify-between h-screen bg-white sm:flex-row " id="cart">
                        <div className="w-full h-auto px-8 pt-0 pb-24 overflow-x-hidden overflow-y-auto sm:w-2/3" id="scroll">
                            <div className="px-6 py-4">
                                <p className="pt-3 pb-2 text-5xl font-black leading-10 text-purple-700">Carrito</p>
                            </div>
                            {listCart.map((item) => (
                                <ItemCart key={item.id} item={item}></ItemCart>
                            ))}
                        </div>
                        <div className="w-full h-auto bg-gray-100 sm:w-1/3">
                            <Resumen></Resumen>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

const Resumen = () => {
    const useCartContext = useCart();
    return (

        <div className="flex flex-col justify-between px-8 py-8 overflow-y-auto">
            <div>
                <p className="text-4xl font-black leading-9 text-purple-700">Resumen</p>
                <div className="flex items-center justify-between pt-8">
                    <p className="text-base leading-none text-gray-800">Subtotal</p>
                    <p className="text-base leading-none text-gray-800">{useCurrency({ value: useCartContext.totalItemsPrice })}</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Envío</p>
                    <p className="text-base leading-none text-gray-800">{useCurrency({ value: useCartContext.totalItemsShipping })}</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">IVA 23%</p>
                    <p className="text-base leading-none text-gray-800">{useCurrency({ value: useCartContext.totalItemsTax })}</p>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between pt-20 pb-6 lg:pt-5">
                    <p className="text-2xl leading-normal text-gray-800">Total</p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">{useCurrency({ value: useCartContext.total })}</p>
                </div>
                <Link to="/cart" className="flex items-center justify-between w-full px-5 py-5 text-2xl leading-none text-center text-white bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                    <span>IR A PAGAR</span><span className="-my-3 text-4xl">$</span>
                </Link>
            </div>
        </div>
    )
}

export default ShippingCart
