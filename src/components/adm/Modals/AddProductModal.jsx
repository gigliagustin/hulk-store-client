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
          <Modal.Title>Add a product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="my-2" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product's name"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={input.description}
                placeholder="Enter product's description"
                onChange={(e) => setInput({ ...input, description: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={input.price}
                placeholder="Enter product's price"
                onChange={(e) => setInput({ ...input, price: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text"
                value={input.stock}
                placeholder="Enter the stock amount"
                onChange={(e) => setInput({ ...input, stock: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select onChange={(e) => setInput({ ...input, status: e.target.value })} aria-label="status">
                <option value={true}>Available</option>
                <option value={false}>Unavailable</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="my-2" controlId="productType">
              <Form.Label>Product Type</Form.Label>
              <Form.Select onChange={(e) => setInput({ ...input, productType: e.target.value })} aria-label="productType">
                <option value="61303e3ff1ed119568f23789">Clothing</option>
                <option value="61303e3ff1ed119568f23789">Electronics</option>
              </Form.Select>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => { handleSubmit(e) }}>
            Add product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
