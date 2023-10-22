import ItemCount from "./ItemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import publicUrl from "../../utils";
import { useGetCategoryName } from '../../contexts/nav.context';
import { useCart } from '../../contexts/cart.context';

const ItemList = ({ props }) => {
    const { id, title, description, price, thumbnails, stock, category } = props;
    const [showDialog, setShowDialog] = useState(false);
    const [qty, setQuatity] = useState(0);

    const categoryName = useGetCategoryName({ id: category });

    const useCartContext = useCart();  

    const onAdd = ({ qty: newValue, data }) => {
        setQuatity(newValue);
        setShowDialog(true);
        let quantity = newValue;
        useCartContext.actions.addToCart({ ...data, id, quantity });
    }
    const dialogClose = () => {
        setShowDialog(false);
    }
    return (<>
        <div className="relative flex flex-col justify-between text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-96">
                <Link to={`/item/${id}/${encodeURIComponent(title)}`}>
                    <img
                        src={`${publicUrl}products/${thumbnails[0]}`}
                        alt={title}
                        className="object-cover w-full h-full mt-4"
                    />
                </Link>
                <div className="absolute left-0 px-3 py-1 text-xs text-white rounded-xl budge bg-amber-900/80 top-1">
                    {categoryName}
                </div>
            </div>
            <div className="flex flex-col items-center justify-between p-6 mb-2">

                <Link to={`/item/${id}/${encodeURIComponent(title)}`}
                    className="text-2xl items-center hover:text-blue-800 leading-none font-medium text-center line-clamp-2 min-h-[60px] flex"
                >{title}
                </Link>
                <div className="text-xs font-medium leading-none text-center line-clamp-2 min-h-[40px] flex">
                    {description}
                </div>
                <div className="pt-1 pb-0 text-4xl font-bold text-purple-300 font-title">
                    $ {price}
                </div>
            </div>
            <div className="p-6 pt-0">
                <div className="text-xs">Cupos Disponibles: <b className="text-base">{stock}</b></div>
                <ItemCount id={id} stock={stock} initial={1} data={props} onAdd={onAdd} />
            </div>
        </div>
        {showDialog ? <div>
            <div onClick={dialogClose} className='fixed top-0 bottom-0 left-0 right-0 z-40 w-screen h-screen bg-purple-800/70'></div>
            <div className='fixed top-0 bottom-0 left-0 right-0 z-50 w-screen h-screen pointer-events-none'>
                <section className="absolute z-50 w-10/12 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl pointer-events-auto left-10 top-24 md:w-1/2 md:left-1/4 md:top-1/4 md:grid md:grid-cols-3">
                    <div onClick={dialogClose} className='absolute w-6 h-6 text-6xl font-light cursor-pointer close right-6'>x</div>
                    <Link to={`/item/${id}/${encodeURIComponent(title)}`}>
                        <img
                            src={`${publicUrl}products/${thumbnails[0]}`}
                            alt={title}
                            className="object-cover w-full h-40 md:h-full"
                        />
                    </Link>
                    <div className="flex flex-col min-h-[250px] p-4 text-left sm:p-6 md:col-span-2 lg:p-8 justify-between h-max">
                        <div className="mb-3 text-2xl font-semibold tracking-widest text-gray-600 uppercase">Agregaste al carrito</div>
                        <p className="text-xl font-semibold tracking-widest text-purple-400 uppercase">
                            <b className="text-2xl">({qty})</b> - {title}
                        </p>
                        <div className="flex gap-10 columns-2">
                            <Link to={`/item/${id}/${encodeURIComponent(title)}`} className="inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-center text-white uppercase bg-black">
                                Ver detalle
                            </Link>
                            <Link to="/cart" className="inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-center text-white uppercase bg-black">
                                Finalizar compra
                            </Link>
                        </div>
                    </div>
                </section>
            </div></div>
            : null}
    </>

    );
}

export default ItemList;


