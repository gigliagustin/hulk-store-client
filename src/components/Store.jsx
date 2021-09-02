import axios from 'axios';
import React, { Fragment } from 'react'
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap'


export default function Store({ setShow, setModalShow }) {

  const [products, setProducts] = useState([]);

  async function handleGetProducts() {
    const resp = await axios.get(process.env.REACT_APP_API_URL + '/products');
    console.log(resp.data)
    setProducts(resp.data.products);
  }

  useEffect(() => {
    handleGetProducts();
  }, []);

  async function handleAddToCart(id) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjEzMTA3N2YzNGI0MWNlMGQ1YjVlNzY5IiwidXNlcl9lbWFpbCI6ImRpZWdvZmxvcmVzMTk5MUBnbWFpbC5jb20iLCJpYXQiOjE2MzA2MTM3OTQsImV4cCI6MTYzMDYyMDk5NH0.stcRlcLg0ovAoAsuNdhfgGVhfnTmajSML97aZ8gBUbI";
    const resp = await axios.post(process.env.REACT_APP_API_URL + '/cart', {
      productId: id,
      quantity: 1
    },
      {
        headers: {
          'x-access-token': token
        }
      });

    console.log(resp.data)
  }

  return (
    <Fragment>
      <Container className="mt-3">
        <Row xl={4} lg={3} md={2} s={1}>
          {products.map(product => (
            <Col className="mb-4">
              <Card
                style={{ width: "18rem", height: "24rem" }}
                className="shadow-lg"
              >
                <Card.Header as="h3">{product.name}</Card.Header>
                <Card.Body>
                  <Card.Subtitle className="text-muted">
                    Descripción
                  </Card.Subtitle>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <ListGroup>
                    <ListGroup.Item>
                      Precio:
                      <Badge pill bg="dark" className="ms-2">
                        {" "}
                        {product.price}
                      </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Cantidad en stock:
                      <Badge pill bg="dark" className="ms-2">
                        {" "}
                        {product.stock}
                      </Badge>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" onClick={() => handleAddToCart(product._id)}>Añadir al carrito</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}

        </Row>
      </Container>
    </Fragment>
  );
}

