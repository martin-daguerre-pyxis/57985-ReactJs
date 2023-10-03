import { useState, useEffect } from "react";
import { ItemCount } from '../products/ItemCount';
import IconTrash from '../icons/IconTrash';
import ItemCart from './ItemCart';

const ShippingCart = ({ Show = false, asPage, context }) => {
    const [show, setShow] = useState(Show);
    const page = asPage ? asPage : false;
    // const [cart, setCart] = useState([]);
    // const [qty, setQuatity] = useState(0);

    useEffect(() => {
        //setCart(context.store.cart);
    }, []);

    const onAdd = ({ qty: newValue, data }) => {
        //setQuatity(newValue);
    }
    return (
        <>
            {!page && (
                <button onClick={() => setShow(!show)} className="relative inline-flex items-center px-3 pt-4 pb-3 mt-3 text-base border-0 bg-purple-300/40 rounded-t-xl top-2 focus:outline-none hover:bg-[aliceblue] md:-my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-8 fill-purple-100" viewBox="0 0 1024 1024">
                        <path d="M352 831a64 64 0 1 0 0 128 64 64 0 0 0 0-128zm447 0a64 64 0 1 0 0 128 64 64 0 0 0 0-128zm64-32H343c-46 0-86-36-92-83l-54-381-31-179c-2-15-16-28-30-28H95a32 32 0 0 1 0-64h41c47 0 88 36 93 83l31 178 54 383c2 15 16 28 29 28h520a32 32 0 1 1 0 63zM383 672a32 32 0 0 1-2-64l434-32c16 0 29-13 31-27l50-288c1-11-2-23-8-30-4-5-9-7-15-7H319a32 32 0 0 1 0-64h554c24 0 47 10 63 29 19 21 27 50 24 81l-51 288c-5 45-46 82-92 82l-431 31-3 1zm0 0" />
                    </svg>
                    <span className="h-8 p-2 leading-none text-white bg-orange-600 rounded-3xl">0</span>
                </button>
            )}
            {show && (
                <div className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-black bg-opacity-40 sticky-0" id="chec-div">
                    <div className="absolute right-0 z-10 w-1/3 h-full overflow-x-hidden transition duration-700 ease-in-out transform translate-x-0" id="checkout">
                        <div className="flex flex-col justify-between h-screen bg-white" id="cart">
                            <div className="w-full h-auto py-8 overflow-x-hidden overflow-y-auto px-14" id="scroll">
                                <div className="flex items-center text-gray-500 cursor-pointer hover:text-gray-600" onClick={() => setShow(!show)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180 icon" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                    <p className="pl-2 text-sm leading-none">cerrar</p>
                                </div>
                                <p className="pt-3 text-5xl font-black leading-10 text-purple-700">Carrito</p>
                                <div className="list">
                                    <ItemCart></ItemCart>
                                </div>
                            </div>
                            <div className="w-full h-auto bg-gray-100">
                                <div className="flex flex-col justify-between py-20 overflow-y-auto px-14">
                                    <div>
                                        <p className="text-4xl font-black leading-9 text-purple-700">Resumen</p>
                                        <div className="flex items-center justify-between pt-16">
                                            <p className="text-base leading-none text-gray-800">Subtotal</p>
                                            <p className="text-base leading-none text-gray-800">$9,000</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Envío</p>
                                            <p className="text-base leading-none text-gray-800">$300</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Impuestos</p>
                                            <p className="text-base leading-none text-gray-800">$350</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between pt-20 pb-6 lg:pt-5">
                                            <p className="text-2xl leading-normal text-gray-800">Total</p>
                                            <p className="text-2xl font-bold leading-normal text-right text-gray-800">$9,650</p>
                                        </div>
                                        <button onClick={() => setShow(!show)} className="w-full py-5 text-base leading-none text-white bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                            IR A PAGAR
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {page && (
                <div className="relative right-0 w-full mx-auto sm:container" id="checkout">
                    <div className="flex flex-col justify-between h-screen bg-white sm:flex-row " id="cart">
                        <div className="w-full h-auto py-8 overflow-x-hidden overflow-y-auto sm:w-2/3 px-14" id="scroll">
                            <p className="pt-3 text-5xl font-black leading-10 text-purple-700">Tu Carrito</p>
                            <div className="items-center py-8 border-t border-gray-200 md:flex mt-14">
                                <div className="w-1/6 ">
                                    <img alt="" src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png" className="object-cover object-center w-full h-full aspect-square" />
                                </div>
                                <div className="md:pl-6 md:w-3/4">
                                    <div className="flex items-center justify-between w-full pt-1">
                                        <p className="text-xl font-black leading-none text-gray-800">Nombre del producto</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5 pr-6">
                                        <div className="flex itemms-center">
                                            <p className="pl-5 text-xs leading-3 text-red-500 underline cursor-pointer">
                                                <IconTrash />
                                            </p>
                                        </div>
                                        <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                    </div>
                                    <div className="mt-6 w-72">
                                        <ItemCount btnText="Modificar" bgColor="bg-gray-100" color="text-gray-500" id={1} stock={10} initial={1} data={[]} onAdd={onAdd} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-auto bg-gray-100 sm:w-1/3">
                            <div className="flex flex-col justify-between py-20 overflow-y-auto px-14">
                                <div>
                                    <p className="text-4xl font-black leading-9 text-purple-700">Resumen</p>
                                    <div className="flex items-center justify-between pt-16">
                                        <p className="text-base leading-none text-gray-800">Subtotal</p>
                                        <p className="text-base leading-none text-gray-800">$9,000</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-gray-800">Envío</p>
                                        <p className="text-base leading-none text-gray-800">$300</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-gray-800">Impuestos</p>
                                        <p className="text-base leading-none text-gray-800">$350</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between pt-20 pb-6 lg:pt-5">
                                        <p className="text-2xl leading-normal text-gray-800">Total</p>
                                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">$9,650</p>
                                    </div>
                                    <button onClick={() => setShow(!show)} className="w-full py-5 text-base leading-none text-white bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                        IR A PAGAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ShippingCart
