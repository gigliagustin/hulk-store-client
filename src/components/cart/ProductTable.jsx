import React,{Fragment} from 'react'
import { Container, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ProductTable() {
    return (
        <Fragment>
            <Container className="mt-3 border">
               <Table striped bordered hover responsive>
                   <thead>
                    <tr>
                        <th>Product_Code#</th>
                        <th>Product_Name</th>
                        <th>Product_Price</th>
                        <th>Product_Quantity</th>
                        <th>Product_Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>32465</td>
                            <td>NameOfTheProduct</td>
                            <td>$$$$$$</td>
                            <td>2</td>
                            <td> 
                                <Button variant="outline-warning" className="me-2" title="Editar la cantidad del producto">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                                <Button variant="outline-danger" title="Eliminar producto del carrito">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>32465</td>
                            <td>NameOfTheProduct</td>
                            <td>$$$$$$</td>
                            <td>2</td>
                            <td> 
                                <Button variant="outline-warning" className="me-2" title="Editar la cantidad del producto">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                                <Button variant="outline-danger" title="Eliminar producto del carrito">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>32465</td>
                            <td>NameOfTheProduct</td>
                            <td>$$$$$$</td>
                            <td>2</td>
                            <td> 
                                <Button variant="outline-warning" className="me-2" title="Editar la cantidad del producto">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                                <Button variant="outline-danger" title="Eliminar producto del carrito">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>32465</td>
                            <td>NameOfTheProduct</td>
                            <td>$$$$$$</td>
                            <td>2</td>
                            <td> 
                                <Button variant="outline-warning" className="me-2" title="Editar la cantidad del producto">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                                <Button variant="outline-danger" title="Eliminar producto del carrito">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>

                    </tbody>
                    
               </Table>
            </Container>
        </Fragment>
    )
}
