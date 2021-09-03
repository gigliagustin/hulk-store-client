import { React, Fragment, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import axios from "axios";
import { isEmpty } from '../components/helpers/validators';

export default function Session({setCurrentUser}) {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    console.log(event.target.value);
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  const login = () => {
    if(isEmpty(userData.email) || isEmpty(userData.password)){
      alert('Todos los campos son requeridos.')
      return;
    }    
    if(!validateEmail(userData.email)){
      alert('El email no es valido.')
      return;
    }

    axios.post(`${process.env.REACT_APP_API_URL}/user/login`, userData).then((response) => {
      console.log(response)
      if(response.data.status.code !== 0){
        alert(response.data.status.message);
      } else{
        localStorage.setItem('currentUser', JSON.stringify(response.data.user));
        setCurrentUser(response.data.user);
        setUserData({});
        setShow(false);
      }
    })
  }

  return (
    <Fragment>
      <Button variant="outline-light" onClick={handleShow} className="me-2">
        Iniciar sesión
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingrese su email:</Form.Label>
              <Form.Control required={true} type="email" name="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control required={true} type="password" name="password" placeholder="password" value={userData.password} onChange={handleChange} required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={login} className="btn-hulkPrimary">
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

