import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";
import ItemCount from "./ItemCount";

const Item = ({ props, addToCartItem }) => {
    const { id, imgSrc, imgAlt, name, price, stock, category } = props;

    const onAdd = ({ qty: newValue, data }) => {
        addToCartItem({ qty: newValue, data });
    }

    return (
        <Card className="flex flex-col justify-between w-96">
            <CardHeader shadow={false} floated={false} className="relative h-96">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="object-cover w-full h-full mt-4"
                />
                <div className="absolute left-0 px-3 py-1 text-xs text-white rounded-xl budge bg-amber-900/80 top-1">{category}</div>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-between mb-2">

                <Typography className="text-lg font-medium text-center line-clamp-2 min-h-[60px] flex">
                    {name}
                </Typography>
                <Typography className="pt-1 pb-0 text-3xl font-bold font-title2">
                    $ {price}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Typography className="text-xs">Cupos Disponibles: <b className="text-base">{stock}</b></Typography>
                <ItemCount id={id} stock={stock} data={props} onAdd={onAdd} />
            </CardFooter>
        </Card>
    );
}

export default Item;


