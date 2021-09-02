import React, {Fragment} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
export default function Adress() {
    return (
        <Fragment>
            <Container className=" border" Fluid>
                <Form>
                <Row>
                    <Form.Group as={Col} controlId="countryForm">
                        <Form.Label>País:</Form.Label>
                        <Form.Control type="text" required placeholder="Colombia"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="townForm">
                        <Form.Label>Provincia/Departamento</Form.Label>
                        <Form.Control type="text" required placeholder="Bogotá" />
                    </Form.Group>
                </Row>
                <Row>

                    <Form.Group as={Col} controlId="adressForm">
                    <Form.Label>Domicilio:</Form.Label>
                        <Form.Control type="text" required placeholder="Calle 67" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="adressNumberForm">
                    <Form.Label>Número:</Form.Label>
                        <Form.Control type="number" required placeholder="7-35" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="zipCodeForm">
                    <Form.Label>Código Postal:</Form.Label>
                        <Form.Control type="number" required placeholder="110231" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="adressNumberForm">
                    <Form.Label>Piso/Oficina</Form.Label>
                        <Form.Control type="number" required placeholder="1105" />
                    </Form.Group>
                </Row>
                </Form>
            </Container>
        </Fragment>
    )
}
