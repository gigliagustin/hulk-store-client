import React, { Fragmen } from 'react';
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap'
import hulkHand from '../../img/hulk-hand-png.png'

export default function NavigationAdm() {
        return (
            <Fragment>
              
                <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={hulkHand}
                        alt="Hulk Hand!"
                        id="hulk-logo">

                        </img>
                        Administración
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">Tienda</Nav.Link>
                        <NavDropdown title="Nuestras marcas" id="basic-nav-dropdown">
                        <NavDropdown.Item className="disabled">DC Comics</NavDropdown.Item>
                        <NavDropdown.Item className="disabled">Marvel</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    <Button variant="outline-light">Iniciar Sesión</Button>
                </Container>
                </Navbar>
            </Fragment>
        )
    }


