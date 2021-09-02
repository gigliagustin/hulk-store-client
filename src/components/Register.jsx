import React, {Fragment, useState} from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

export default function Register() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <Fragment>
        <Button variant="outline-success" className="" onClick={handleShow}>
          Registrarme
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="userFirstname">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Armando"
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="userLastname">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Code"></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="celphone">
                  <Form.Label>Número de teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="3815879021"
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Col className="mb-3" xs={5}>
                  <Form.Floating>
                    <Form.Control
                      id="floatingCountry"
                      type="text"
                      placeholder="Argentina"
                    />
                    <label htmlFor="floatingCountry">País de Residencia</label>
                  </Form.Floating>
                </Col>
                <Col>
                  <Form.Floating>
                    <Form.Control
                      id="floatingRegion"
                      type="text"
                      placeholder="Tucumán"
                    />
                    <label htmlFor="floatingRegion">Provincia</label>
                  </Form.Floating>
                </Col>
                <Col>
                  <Form.Floating>
                    <Form.Control
                      id="floatingZipCode"
                      type="number"
                      placeholder="4000"
                      min="0"
                    />
                    <label htmlFor="floatingZipCode">Código Postal</label>
                  </Form.Floating>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="birthdate">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control type="date"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="userEmail">
                <Form.Label>Ingrese su usuario:</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="userPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="userPasswordRepeat">
                <Form.Label>Repita su contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repetir contraseña"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Registrarme
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
}
