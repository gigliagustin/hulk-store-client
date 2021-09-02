import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Form, Button, Spinner } from 'react-bootstrap';

export default function ProductsTable({ addedNewProduct }) {

    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [productId, setProductId] = useState('');
    const [input, setInput] = useState({});
    const [loading, setLoading] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow(id) {
        //find product by id
        const product = products.find(p => p._id === id);
        console.log("prod: ", product);
        setInput({
            name: product.name,
            price: product.price,
            description: product.description,
            stock: product.stock,
            status: product.status,
            productType: product.productType,
        })
        setProductId(id);
        setShow(true);
    }

    async function handleSubmit() {

        const response = await axios.put(process.env.REACT_APP_API_URL + '/product',
            {
                id: productId,
                name: input.name,
                price: input.price,
                description: input.description,
                stock: input.stock,
                status: input.status,
                productType: input.productType._id,
            }
        );
        console.log(response);
        setShow(false);
    }

    useEffect(() => {
        handleGetProducts();
    }, [show, addedNewProduct]);

    const handleGetProducts = async () => {
        setLoading(true);
        const response = await axios.get(process.env.REACT_APP_API_URL + '/products');
        console.log("res.data", response.data);
        setProducts(response.data.products);
        setLoading(false);
    }

    return (
        <>
            {loading ? <Spinner animation="border" variant="primary" /> :
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Product type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.productType.name}</td>
                                <td>
                                    <button className="btn btn-primary mx-1" onClick={() => handleShow(product._id)}>Edit</button>
                                    <button className="btn btn-danger mx-1">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit product</Modal.Title>
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
                        Edit product
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}