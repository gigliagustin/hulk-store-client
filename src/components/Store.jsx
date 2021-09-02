import React, { Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import placeholderPhoto from './img/placeholder-286x160.png'


export default function Store({setShow, setModalShow}) {
    return (
             <Fragment>
                <Container className="mt-3">
                    <Row xl={3} lg={3} md={2} s={1}>
                        <Col className="mb-4">
                            <Card style={{ width: '18rem' }} className="shadow-lg">
                            <Card.Img variant="top" src={placeholderPhoto} />
                            <Card.Body>
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil perspiciatis accusantium quisquam enim beatae temporibus, ad possimus rem commodi.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className="shadow-lg">
                            <Card.Img variant="top" src={placeholderPhoto} />
                            <Card.Body>
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, velit voluptatem mollitia commodi laboriosam nihil rerum reprehenderit enim sed delectus!
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className="shadow-lg">
                            <Card.Img variant="top" src={placeholderPhoto} />
                            <Card.Body>
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa esse ducimus voluptatem quisquam quia tempora consequuntur labore atque id dignissimos qui ratione incidunt, ipsam, porro laborum? Ipsa, maiores odio?
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className="shadow-lg">
                            <Card.Img variant="top" src={placeholderPhoto} />
                            <Card.Body>
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla dolorem. Excepturi labore vero ipsum, incidunt obcaecati deserunt at temporibus.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </Fragment>
    )
}

