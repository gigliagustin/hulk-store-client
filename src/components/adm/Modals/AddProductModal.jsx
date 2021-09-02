import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";


export default function AddProductModal({ show, handleClose, addedNewProduct, setAddedNewProduct }) {

  const [input, setInput] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      const resp = await axios.post(`${process.env.REACT_APP_API_URL}/product`,
        {
          name: input.name,
          description: input.description,
          price: input.price,
          stock: parseInt(input.stock),
          status: eval(input.status),
          productType: input.productType,
        })
      console.log(resp);

    } catch (error) {
      console.log(error);
    }
    setAddedNewProduct(!addedNewProduct);
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="my-2" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={input.description}
                placeholder="Ingrese una descripción"
                onChange={(e) => setInput({ ...input, description: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="price">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                value={input.price}
                placeholder="Ingrese el precio"
                onChange={(e) => setInput({ ...input, price: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text"
                value={input.stock}
                placeholder="Ingrese cantidad en stock"
                onChange={(e) => setInput({ ...input, stock: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="status">
              <Form.Label>Estado</Form.Label>
              <Form.Select onChange={(e) => setInput({ ...input, status: e.target.value })} aria-label="status">
                <option value={true}>Disponible</option>
                <option value={false}>No disponible</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="my-2" controlId="productType">
              <Form.Label>Tipo de producto</Form.Label>
              <Form.Select onChange={(e) => setInput({ ...input, productType: e.target.value })} aria-label="productType">
                <option value="61303e3ff1ed119568f23789">A</option>
                <option value="61303e3ff1ed119568f23789">B</option>
              </Form.Select>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={(e) => { handleSubmit(e) }}>
            Agregar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
