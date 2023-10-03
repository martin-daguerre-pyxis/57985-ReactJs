import React from 'react'
import { ItemCount } from '../products/ItemCount';
import IconTrash from '../icons/IconTrash';

const ItemCart = () => {
    const onAdd = ({ qty: newValue, data }) => {
        //setQuatity(newValue);
    }
    return (
        <div className="flex items-center py-8 border-t border-gray-200 justify-stretch mt-14">
            <div className="w-1/4">
                <img alt="" src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png" className="object-cover object-center w-full h-full aspect-square" />
            </div>
            <div className="flex flex-col md:pl-6 md:w-3/4 justify-stretch">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-lg font-black leading-none text-gray-800">Nombre del producto</p>
                </div>
                <div className="flex items-center justify-between pt-5 pr-6">
                    <p className="text-xl font-black leading-none text-gray-800">$9,000</p>
                </div>
                <div className="flex mt-6">
                    <ItemCount
                        btnText="Modificar" bgColor="bg-gray-100" color="text-gray-500"
                        id={1} stock={10} initial={1} data={[]} onAdd={onAdd}
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