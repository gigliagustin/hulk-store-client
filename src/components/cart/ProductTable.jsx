import React,{Fragment} from 'react'
import { Container, Table, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductTable() {

    const [products, setProducts] = useState([]);

    async function handleGetCart() {
        const tokken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjEzMTA3N2YzNGI0MWNlMGQ1YjVlNzY5IiwidXNlcl9lbWFpbCI6ImRpZWdvZmxvcmVzMTk5MUBnbWFpbC5jb20iLCJpYXQiOjE2MzA2MTM3OTQsImV4cCI6MTYzMDYyMDk5NH0.stcRlcLg0ovAoAsuNdhfgGVhfnTmajSML97aZ8gBUbI";
        const products = await axios.get(process.env.REACT_APP_API_URL + '/cart', {
            headers: {
                    "X-ACCESS-TOKEN": tokken
                }
                });
        console.log(products.data);
        setProducts(products.data.cartDetail);
    }

    useEffect(() => {
        handleGetCart();
    }, []);
        

    return (
        <Fragment>
            <Container className="mt-3 border">
               <Table className="my-3" striped bordered hover responsive>
                   <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>

                        {products.map(product => ( 
                        <tr>
                            <td>{product.product.name}</td>
                            <td>{product.product.price}</td>
                            <td>{product.quantity}</td>
                            <td> 
                                <Button variant="outline-warning" className="me-2" title="Editar la cantidad del producto">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                                <Button variant="outline-danger" title="Eliminar producto del carrito">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    
               </Table>
            </Container>
            <Modal>
                <Modal.Header>
                    <Modal.Title>Editar cantidad</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
