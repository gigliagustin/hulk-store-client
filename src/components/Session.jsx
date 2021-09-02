import {React, Fragment, useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

export default function Session() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <Fragment>
        <Button variant="outline-light" onClick={handleShow}>
          Iniciar sesión
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Inicio de sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese su usuario:</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
}

