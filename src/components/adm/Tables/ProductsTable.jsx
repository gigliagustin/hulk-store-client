import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Form, Button, Spinner } from "react-bootstrap";

export default function ProductsTable({ addedNewProduct }) {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState("");
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);

  function handleClose() {
    setShow(false);
  }

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = user?.token;

  function handleShow(id) {
    //find product by id
    const product = products.find((p) => p._id === id);
    console.log("prod: ", product);
    setInput({
      name: product?.name,
      price: product?.price,
      description: product?.description,
      stock: product?.stock,
      status: product?.status,
      productType: product?.productType,
    });
    setProductId(id);
    setShow(true);
  }

  async function handleSubmit() {
    if (
      !input.name ||
      !input.price ||
      !input.description ||
      !input.stock ||
      !input.status ||
      !input.productType
    ) {
      alert("Por favor llene todos los campos con datos válidos.");
      return;
    }

    try {
      const response = await axios.put(
        process.env.REACT_APP_API_URL + "/product",
        {
          id: productId,
          name: input?.name,
          price: input?.price,
          description: input?.description,
          stock: input?.stock,
          status: input?.status,
          productType: input?.productType._id,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      console.log(response);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetProducts();
  }, [show, addedNewProduct]);

  const handleGetProducts = async () => {
    setLoading(true);
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "/products"
    );
    console.log("res.data", response.data);
    setProducts(response.data.products);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Tipo de producto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product?.name}</td>
                  <td>{product?.description}</td>
                  <td>{product?.price}</td>
                  <td>{product?.stock}</td>
                  <td>{product?.productType?.name}</td>
                  <td>
                    <button
                      className="btn btn-primary m-1 d-inline"
                      onClick={() => handleShow(product?._id)}
                    >
                      Editar
                    </button>
                    <button className="btn btn-danger m-1 d-inline">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="my-2" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                value={input?.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={input.description}
                placeholder="Ingrese una descripción"
                onChange={(e) =>
                  setInput({ ...input, description: e.target.value })
                }
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
                placeholder="Ingrese la cantidad en stock"
                onChange={(e) => setInput({ ...input, stock: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="status">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                onChange={(e) => setInput({ ...input, status: e.target.value })}
                aria-label="status"
              >
                <option value={true}>Disponible</option>
                <option value={false}>No disponible</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="my-2" controlId="productType">
              <Form.Label>Tipo de producto</Form.Label>
              <Form.Select
                onChange={(e) =>
                  setInput({ ...input, productType: e.target.value })
                }
                aria-label="productType"
              >
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
          <Button
            variant="primary"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Editar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
