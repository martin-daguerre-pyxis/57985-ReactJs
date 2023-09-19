import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
const addToCart = () => {

}
const ProductItem = ({ props }) => {
    const { id, imgSrc, imgAlt, productName, productDesc, productPrice, productStock, category } = props;
    return (
        <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="relative h-96">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="object-cover w-full h-full"
                />
                <div className="absolute p-3 text-white budge bg-amber-900 top-1 left-1">{category}</div>
            </CardHeader>
            <CardBody>
                <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                        {productName}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        {productPrice}
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    {productDesc}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Typography>Cupos Disponibles: {productStock}</Typography>
                <Button
                    onClick={addToCart(id)}
                    ripple={false}
                    fullWidth={true}
                    className="shadow-none bg-blue-gray-900/10 text-blue-gray-900 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    Agregar al Carrito
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProductItem;