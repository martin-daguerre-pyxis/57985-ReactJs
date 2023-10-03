import ItemCount from "./ItemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemGalery from './ItemGalery';
import useGetCategoryName from "../../hooks/useGetCategoryName";

const Item = ({ props }) => {
    const { id, title, description, price, thumbnails, stock, brand, category, context } = props;

    const [showDialog, setShowDialog] = useState(false);
    const [qty, setQuatity] = useState(0);

    const categoryName = useGetCategoryName({ id: category, list: props.context.store.categories });

    const onAdd = ({ qty: newValue, data }) => {
        console.log({ qty: newValue, data });
        setQuatity(newValue);
        setShowDialog(true);
    }

    const dialogClose = () => {
        setShowDialog(false);
    }
    return (<>
        <section className="text-gray-700 bg-white/60">
            <div className="w-full px-5 py-24 mx-auto">
                <div className="flex px-3 py-3 text-xs text-white w-fit bg-amber-900/80">
                    {categoryName}
                </div>
                <div className="sm:flex sm:columns-2">
                    <div className="relative w-full sm:w-1/2 aspect-square">
                        <ItemGalery thumbnails={thumbnails}></ItemGalery>
                    </div>
                    <div className="w-full mt-6 sm:w-auto sm:pl-10 sm:py-6 sm:mt-0">
                        <h1 className="mb-12 text-5xl font-bold text-purple-600 font-title">
                            {title}
                        </h1>
                        <p className="leading-relaxed">
                            {description}
                        </p>
                        <div className="flex mt-9">
                            <span className="text-5xl font-medium text-gray-900 font-title">$ {price}</span>
                        </div>
                        <div className="mt-9">
                            <div className="mb-3 text-xs">Cupos Disponibles: <b className="text-base">{stock}</b></div>
                            <ItemCount id={id} stock={stock} initial={1} data={props} onAdd={onAdd} />
                        </div>
                        <hr className="h-8" />

                        <div className="flex justify-end w-full py-2 mb-4">
                            <Link className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </Link>
                            <Link className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section >
        {showDialog ? <div>
            < div onClick={dialogClose} className='fixed top-0 bottom-0 left-0 right-0 z-40 w-screen h-screen bg-purple-800/70' ></div >
            <div className='fixed top-0 bottom-0 left-0 right-0 z-50 w-screen h-screen pointer-events-none'>
                <section className="absolute z-50 w-full max-w-full mx-auto overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl pointer-events-auto sm:max-w-md top-1/4 left-1/2">
                    <div onClick={dialogClose} className='absolute w-6 h-6 text-6xl font-light cursor-pointer close right-6'>x</div>
                    <div className="p-8 text-center sm:p-10 lg:p-16">
                        <div className="mb-3 text-base font-semibold tracking-widest text-gray-600 uppercase">Agregaste al carrito</div>
                        <p className="text-xl font-semibold tracking-widest text-purple-400 uppercase">
                            <b className="text-2xl">({qty})</b> - {title}
                        </p>
                        <div className="flex">
                            <Link to="/cart" className="inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-black">
                                Finalizar compra
                            </Link>
                        </div>
                    </div>
                </section>
            </div></div >
            : null}
    </>

    );
}

export default Item;


