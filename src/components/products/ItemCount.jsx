import { useState, useEffect } from 'react';
import useCounter from '../../hooks/counter';

export const ItemCount = ({ id, stock = 1, initial = 0, intervalo = 1, onAdd, data }) => {
    const { newValue, less, more } = useCounter({ initial, stock, intervalo });
    const [disabled, setDisabled] = useState(true);

    const addProduct = () => {
        if (newValue >= 1) {
            onAdd({ qty: newValue, id: id, data });
        }
    }

    useEffect(() => {
        if (newValue >= 1) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [newValue]);

    return (
        <div className="flex w-full bg-gray-200 rounded-lg columns-2">
            <div className="flex p-2 text-base font-body">
                <button type="button" onClick={less} className="w-10 font-bold rounded-md bg-blue-gray-100">-</button>
                <input type="number" readOnly className="w-16 font-bold text-center outline-none appearance-none" value={newValue} />
                <button type="button" onClick={more} className="w-10 font-bold rounded-md bg-blue-gray-100">+</button>
            </div>
            <div className="w-full">
                <button
                    type="button"
                    disabled={disabled}
                    className="w-full p-3 text-white disabled:text-gray-400 disabled:bg-gray-200 rounded-r-md bg-deep-purple-300"
                    onClick={addProduct}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount;