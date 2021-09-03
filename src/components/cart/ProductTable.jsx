import React, { Fragment } from "react";
import { Container, Table, Button, Modal, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [inputQuantity, setInputQuantity] = useState("");
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState("");
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = user?.token;

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  function handleOpenModal(id) {
    setProductId(id);
    handleShow();
  }

  async function handleSubmit(id) {
    try {
      const resp = await axios.put(
        process.env.REACT_APP_API_URL + "/cart",
        {
          productId: id,
          quantity: inputQuantity,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (resp.data.status.code === 0) {
        alert("Cantidad editada correctamente");
      } else if (resp.data.status.code === 1) {
        alert("Stock insuficiente de éste producto");
      }
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleGetCart() {
    try {
      const products = await axios.get(
        process.env.REACT_APP_API_URL + "/cart",
        {
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        }
      );
      console.log(products.data);
      setProducts(products.data.cartDetail);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleGetCart();
  }, [show]);

  return (
    <Fragment>
      {loading ? (
        <Spinner className="my-5" animation="border" role="status" size="md">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container className="mt-3 border">
          <Table
            variant="dark"
            className="my-3"
            striped
            bordered
            hover
            responsive
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product?.product._id}>
                  <td>{product?.product.name}</td>
                  <td>{product?.product.price}</td>
                  <td>{product?.quantity}</td>
                  <td>
                    <Button
                      onClick={() => handleOpenModal(product?.product._id)}
                      variant="outline-warning"
                      className="me-2"
                      title="Editar la cantidad del producto"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                      variant="outline-danger"
                      title="Eliminar producto del carrito"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar cantidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={inputQuantity}
            onChange={(e) => setInputQuantity(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Cantidad"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
          <Button onClick={() => handleSubmit(productId)} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
