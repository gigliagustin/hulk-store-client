import React, { Fragment } from 'react'
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap'


export default function Store({setShow, setModalShow}) {
    return (
             <Fragment>
                <Container className="mt-3">
                    <Row xl={4} lg={3} md={2} s={1}>
                        <Col className="mb-4">
                            <Card style={{ width: '18rem', height:'24rem'}} className="shadow-lg">  
                            <Card.Header as="h3">Product_Name</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className="text-muted">Product_Description</Card.Subtitle>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil perspiciatis accusantium quisquam enim beatae temporibus, ad possimus rem commodi.
                                </Card.Text>
                                <ListGroup>
    <ListGroup.Item >Product_Price:<Badge pill bg="dark" className="ms-2" > $10.57 
        </Badge>
        </ListGroup.Item>
    <ListGroup.Item>Product_Stock
        <Badge pill bg="dark" className="ms-2"> 10
        </Badge>
        </ListGroup.Item>
  </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Añadir al carrito</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem', height:'24rem'}} className="shadow-lg">  
                            <Card.Header as="h3">Product_Name</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className="text-muted">Product_Description</Card.Subtitle>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil perspiciatis accusantium quisquam enim beatae temporibus, ad possimus rem commodi.
                                </Card.Text>
                                <ListGroup>
    <ListGroup.Item >Product_Price:<Badge pill bg="dark" className="ms-2" > $10.57 
        </Badge>
        </ListGroup.Item>
    <ListGroup.Item>Product_Stock
        <Badge pill bg="dark" className="ms-2"> 10
        </Badge>
        </ListGroup.Item>
  </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Añadir al carrito</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem', height:'24rem'}} className="shadow-lg">  
                            <Card.Header as="h3">Product_Name</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className="text-muted">Product_Description</Card.Subtitle>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil perspiciatis accusantium quisquam enim beatae temporibus, ad possimus rem commodi.
                                </Card.Text>
                                <ListGroup>
    <ListGroup.Item >Product_Price:<Badge pill bg="dark" className="ms-2" > $10.57 
        </Badge>
        </ListGroup.Item>
    <ListGroup.Item>Product_Stock
        <Badge pill bg="dark" className="ms-2"> 10
        </Badge>
        </ListGroup.Item>
  </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Añadir al carrito</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem', height:'24rem'}} className="shadow-lg">  
                            <Card.Header as="h3">Product_Name</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className="text-muted">Product_Description</Card.Subtitle>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil perspiciatis accusantium quisquam enim beatae temporibus, ad possimus rem commodi.
                                </Card.Text>
                                <ListGroup>
    <ListGroup.Item >Product_Price:<Badge pill bg="dark" className="ms-2" > $10.57 
        </Badge>
        </ListGroup.Item>
    <ListGroup.Item>Product_Stock
        <Badge pill bg="dark" className="ms-2"> 10
        </Badge>
        </ListGroup.Item>
  </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Añadir al carrito</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </Fragment>
    )
}

