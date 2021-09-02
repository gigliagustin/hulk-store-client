import { React, Fragment, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import axios from "axios";

export default function Session() {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    console.log(event.target.value);
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const login = () => {
    console.log(process.env.REACT_APP_API_URL);
  }

  return (
    <Fragment>
      <Button variant="outline-light" onClick={handleShow}>
        Iniciar sesión
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Inicio de sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingrese su usuario:</Form.Label>
              <Form.Control type="email" name="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control type="password" name="password" placeholder="password" value={userData.password} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={login}>
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

