import React, { useState, useEffect } from "react";
import {
  Form,
  InputGroup,
  Button,
  ButtonGroup,
  Modal,
} from "react-bootstrap";
import ProductsDataService from "../../services/products";

const ItemAdd = ({ doc = false }) => {
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [category, setCategory] = useState(1);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(10);
  const [status, setStatus] = useState(true);
  const [thumbnails, setThumbnails] = useState([]);
  const [id, setId] = useState(false);

  if (doc) {
    setId(doc.id);
    setAdd(false);
    setEdit(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || description === "" || price === 0) {
      alert("Faltan datos");
      return;
    }
    const newItem = {
      title,
      description,
      code,
      category,
      price,
      stock,
      status,
      thumbnails,
    };
    console.log(newItem);

    try {
      if (id) {
        await ProductsDataService.updateItem(id, newItem);
        alert("Actualización exitosa!");
      } else {
        await ProductsDataService.addItems(newItem);
        alert("Carga de nuevo elemento exitosa!");
      }
    } catch (err) {
      alert(err.message);
    }

    setTitle("");
    setDescription("");
    setCode("");
    setCategory(1);
    setPrice(0);
    setStock(10);
    setStatus(true);
    setThumbnails([]);
  };

  useEffect(() => {
    const editHandler = async () => {
      try {
        const docSnap = await ProductsDataService.getItem(id);
        console.log("El item es:", docSnap.data());
        setTitle(docSnap.data().title);
        setDescription(docSnap.data().description);
        setCode(docSnap.data().code);
        setCategory(docSnap.data().category);
        setPrice(docSnap.data().price);
        setStock(docSnap.data().stock);
        setThumbnails(docSnap.data().thumbnails);
        setStatus(docSnap.data().status);
      } catch (err) {
      }
    };
    editHandler();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  useEffect(() => {
    setTitle("");
    setDescription("");
    setCode("");
    setCategory(1);
    setPrice(0);
    setStock(10);
    setStatus(true);
    setThumbnails([]);
  }, [add]);

  const handleClose = () => setShow(false);

  const onChangeThumbnails = (e) => {
    const thumbnails = e.split(",");
    setThumbnails(thumbnails);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>{id ? "Editando el" : "Nuevo"} Producto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formItemTitle">
              <InputGroup>
                <InputGroup.Text id="formItemTitle">Titulo</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <InputGroup>
                <InputGroup.Text id="formDescription">
                  Descripción
                </InputGroup.Text>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCode">
              <InputGroup>
                <InputGroup.Text id="formCode">Código</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Código"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategory">
              <InputGroup>
                <InputGroup.Text id="formCategory">Categoría</InputGroup.Text>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="1">Escritorios</option>
                  <option value="2">Alfombras</option>
                  <option value="3">Articulos deportivos</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <InputGroup>
                <InputGroup.Text id="formPrice">Precio</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Precio"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStock">
              <InputGroup>
                <InputGroup.Text id="formStock">Stock</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formThumbnails">
              <div className="my-5 text-xs">
                Las imagenes tienen que estar cargadas en el repositorio de
                Productos con nombre único.
                Agregar nombres separados por (coma)
              </div>
              <InputGroup>
                <InputGroup.Text id="formThumbnails">Imagenes</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Imagenes"
                  value={thumbnails}
                  onChange={(e) => onChangeThumbnails(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <ButtonGroup className="mb-3">
              <Button
                disabled={status}
                variant="success"
                className="bg-green-700"
                onClick={(e) => {
                  setStatus(true);
                }}
              >
                Disponible
              </Button>

              <Button
                variant="danger"
                className="bg-red-700"
                disabled={!status}
                onClick={(e) => {
                  setStatus(false);
                }}
              >
                No Disponible
              </Button>
            </ButtonGroup>
            <div className="flex pb-6 pl-4 text-gray-500">
              {status
                ? "El producto está disponible"
                : " Producto NO disponible"}
            </div>
            <div className="gap-2 d-grid">
              <Button variant="success" className="bg-green-700" type="Submit">
                {id ? "Guardar cambios del" : "Agregar"} Producto
              </Button>
            </div>
          </Form>
        </Modal.Body>
        {/* 
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ItemAdd;
