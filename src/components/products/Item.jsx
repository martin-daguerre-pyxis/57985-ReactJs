import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from "@material-tailwind/react";
import ItemCount from "./ItemCount";
import { useState } from 'react';

const Item = ({ props }) => {
    const { id, title, description, price, pictureUrl,
        discounts, stock, brand, category, images, video } = props;

    const [showDialog, setShowDialog] = useState(false);
    const [qty, setQuatity] = useState(0);

    const onAdd = ({ qty: newValue, data }) => {
        console.log({ qty: newValue, data });
        setQuatity(newValue);
        setShowDialog(true);
    }

    const dialogClose = () => {
        setShowDialog(false);
    }
    return (<>
        <Card className="flex flex-col justify-between w-96">
            <CardHeader shadow={true} floated={false} className="relative h-96">
                <img
                    src={pictureUrl}
                    alt={title}
                    className="object-cover w-full h-full mt-4"
                />
                <div className="absolute left-0 px-3 py-1 text-xs text-white rounded-xl budge bg-amber-900/80 top-1">{category}</div>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-between mb-2">

                <div className="text-lg items-center leading-none font-medium text-center line-clamp-2 min-h-[60px] flex">
                    {title}
                </div>
                <div className="text-xs font-medium leading-none text-center line-clamp-2 min-h-[40px] flex">
                    {description}
                </div>
                <div className="pt-1 pb-0 text-4xl font-bold text-purple-300 font-title">
                    $ {price}
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <div className="text-xs">Cupos Disponibles: <b className="text-base">{stock}</b></div>
                <ItemCount id={id} stock={stock} data={props} onAdd={onAdd} />
            </CardFooter>
        </Card>
        {showDialog ? <div>
            <div onClick={dialogClose} className='fixed top-0 bottom-0 left-0 right-0 z-40 w-screen h-screen bg-white/50'></div>
            <div className='fixed top-0 bottom-0 left-0 right-0 z-50 w-screen h-screen pointer-events-none'>
                <section className="absolute z-50 w-10/12 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl pointer-events-auto left-10 top-24 md:w-1/2 md:left-1/4 md:top-1/4 md:grid md:grid-cols-3">
                    <div onClick={dialogClose} className='absolute w-6 h-6 text-3xl font-light cursor-pointer close right-2'>x</div>
                    <img
                        src={pictureUrl}
                        alt={title}
                        className="object-cover w-full h-40 md:h-full"
                    />
                    <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                        <div className="mb-3 text-base font-semibold tracking-widest text-gray-400 uppercase">Agregaste al carrito</div>
                        <p className="text-xl font-semibold tracking-widest text-purple-400 uppercase">
                            <b className="text-2xl">({qty})</b> - {title}
                        </p>
                        <div className="flex gap-10 columns-2">
                            <a href="#" className="inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-black">
                                Ver detalle
                            </a>
                            <a href="#" className="inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-black">
                                Finalizar compra
                            </a>
                        </div>
                    </div>
                </section>
            </div></div>
            : null}
    </>

    );
}

export default Item;


