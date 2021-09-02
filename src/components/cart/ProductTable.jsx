import React,{Fragment} from 'react'
import { Container, Table, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductTable() {

    const [products, setProducts] = useState([]);
    const [inputQuantity , setInputQuantity] = useState('');
    const [show, setShow] = useState(false);
    const [productId, setProductId] = useState('');

    
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user.token;
    

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

    function handleSubmit(id){
        
        axios.put(process.env.REACT_APP_API_URL + '/cart', 
        {
            productId: id,
            quantity: inputQuantity
            },
            {
                headers: {
                    'x-access-token': token
                    }
            }
        )
    }

    async function handleGetCart() {
        const products = await axios.get(process.env.REACT_APP_API_URL + '/cart', {
            headers: {
                    "X-ACCESS-TOKEN": token
                }
                });
        console.log(products.data);
        setProducts(products.data.cartDetail);
    }

    useEffect(() => {
        handleGetCart();
    }, [show]);
        

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
                                <Button onClick={() => handleOpenModal(product.product._id)} variant="outline-warning" className="me-2" title="Editar la cantidad del producto">
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Editar cantidad</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    <input value={inputQuantity} onChange={(e) => setInputQuantity(e.target.value)} type="number" className="form-control" placeholder="Cantidad" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">Close</Button>
                    <Button onClick={() => handleSubmit(productId)} variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
