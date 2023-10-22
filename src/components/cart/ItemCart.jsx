import React from 'react'
import { ItemCount } from '../products/ItemCount';
import IconTrash from '../icons/IconTrash';
import { Link } from 'react-router-dom';
import publicUrl from '../../utils';
import { useCart } from '../../contexts/cart.context';
import useCurrency from '../../hooks/currency';

const ItemCart = (item) => {

    const useCartContext = useCart(); 
    const Item = item.item;

    const onAdd = ({ qty: newValue, data }) => {
        let quantity = newValue;
        let id = Item.id;
        useCartContext.actions.addToCart({ ...data, id, quantity });
    }
    const total = Number(Item.quantity * Item.price);
    return (
        <div className="flex items-center py-4 m-0 border-t border-gray-200 justify-stretch">
            <div className="w-1/4 max-w-[100px]">
                <Link to={`/item/${Item.id}/${encodeURIComponent(Item.title)}`}>
                    <img
                        src={`${publicUrl}products/${Item.thumbnails[0]}`}
                        alt={Item.title}
                        className="object-cover w-full h-full"
                    />
                </Link>
            </div>
            <div className="flex flex-col md:pl-6 md:w-3/4 justify-stretch">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-xl font-black leading-none text-gray-800">{Item.title}</p>
                </div>
                <div className="flex items-center justify-between pt-2 pr-6">
                    <p className="text-sm font-black leading-none text-gray-800">
                        <span>{Item.quantity} unidades a {useCurrency({ value: Number(Item.price) })}</span>
                        <div className='my-2'>{useCurrency({ value: total })}</div>
                    </p>
                </div>
                <div className="flex max-w-md mt-2">
                    <ItemCount setValue="true"
                        btnText="Modificar" bgColor="bg-gray-100" color="text-gray-500"
                        id={1} stock={10} initial={Item.quantity} data={[]} onAdd={onAdd}
                    />
                    <div className="flex itemms-center">
                        <p className="pt-3 text-xs leading-3 text-red-500 underline cursor-pointer pl-9">
                            <IconTrash />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart