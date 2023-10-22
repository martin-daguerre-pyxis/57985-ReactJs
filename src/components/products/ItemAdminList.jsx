import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ProductsDataService from "../../services/products";
import publicUrl from '../../utils';
import ItemAdd from './ItemAdd';
const ItemAdminList = () => {

    const [items, setItems] = useState([]);
    const [add, setAdd] = useState(false);

    const getItemIdHandler = (doc = null) => {
        if (doc !== null) {
            console.log("Editar:" + doc.id);
            setAdd(true);
        }
    };
    
    const addItemIdHandler = () => {
        setAdd(true);
    };

    const getItems = async () => {
        try {
            const data = await ProductsDataService.getAllItems();
            setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    const deleteHandler = async (id) => {
        if (id === undefined) {
            await ProductsDataService.deleteItem(id);
            getItems();
        }
    };

    return (
        <>
            <ItemAdd doc={false} addItem={add} />
            <h1 className="text-2xl font-bold text-center">Lista de Productos</h1>
            <div className="mb-2">
                <Button className="mr-3 bg-green-700 border-0" onClick={() => { addItemIdHandler() }}>
                    Agregar un Producto
                </Button>
                <Button className="bg-gray-700 border-0" onClick={() => { getItems() }}>
                    Recargar Lista
                </Button>
            </div>

            {/* <pre>{JSON.stringify(items, undefined, 2)}</pre>} */}
            <Table striped bordered hover size="xl" className="w-full">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>code</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Imagen</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((doc, index) => {
                        return (
                            <tr className="align-middle" key={doc.id}>
                                <td>{doc.title}</td>
                                <td>{doc.description}</td>
                                <td>{doc.code}</td>
                                <td>{doc.category}</td>
                                <td>{doc.price}</td>
                                <td>{doc.stock}</td>
                                <td>{doc.status ? 'Disponible' : '···'}</td>
                                <td>
                                    <img src={`${publicUrl}products/${doc.thumbnails[0]}`} alt={doc.title} width="100" />
                                </td>
                                <td>
                                    <Button
                                        variant="secondary" className="mr-3 bg-gray-700"
                                        onClick={() => getItemIdHandler(doc)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        variant="danger" className="bg-red-700 delete"
                                        onClick={() => deleteHandler(doc.id)}
                                    >
                                        Borrar
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default ItemAdminList;
