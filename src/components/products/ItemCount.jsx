import { useState, useEffect } from 'react';
import useCounter from '../../hooks/counter';

export const ItemCount = ({ id, stock = 1, initial = 1, intervalo = 1, onAdd, data, bgColor, color, btnText }) => {
    const { newValue, less, more } = useCounter({ initial, stock, intervalo });
    const [disabled, setDisabled] = useState(true);
    const backgroundColor = bgColor ? bgColor : "bg-deep-purple-300";
    const textColor = color ? color : "text-white";
    const text = btnText ? btnText : "Agregar al Carrito";

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
        <div className={`flex w-full overflow-hidden rounded-2xl ${backgroundColor} ${textColor} columns-2`}>
            <div className="flex p-2 text-base font-body">
                <button type="button" onClick={less} className="w-10 h-10 font-bold rounded-l-xl text-blue-gray-700 bg-blue-gray-100">-</button>
                <input readOnly className="w-16 h-10 font-bold text-center outline-none appearance-none text-blue-gray-700" value={newValue} />
                <button type="button" onClick={more} className="w-10 h-10 font-bold rounded-r-xl text-blue-gray-700 bg-blue-gray-100">+</button>
            </div>
            <div className="w-full">
                <button
                    type="button"
                    disabled={disabled}
                    className={`w-full p-3 ${textColor} ${backgroundColor} h-14 disabled:${textColor} disabled:${backgroundColor} disabled:bg-opacity-25 rounded-r-md`}
                    onClick={addProduct}>
                    {text}
                </button>
            </div>
        </div>
    )
}
export default ItemCount;