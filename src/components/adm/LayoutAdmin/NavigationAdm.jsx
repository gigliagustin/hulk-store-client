import React, { Fragment } from 'react';
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap'
import hulkHand from '../../img/hulk-hand-png.png'

export default function NavigationAdm() {
        return (
            <Fragment>
              
                <Navbar bg="light" variant="light" expand="lg" fixed="bottom">
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
                        <Nav.Link href="#">Lorem</Nav.Link>
                        <NavDropdown title="ipsumt dolor" id="basic-nav-dropdown">
                        <NavDropdown.Item className="disabled">Sit</NavDropdown.Item>
                        <NavDropdown.Item className="disabled">Amend</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    <Button variant="outline-light">Iniciar Sesión</Button>
                </Container>
                </Navbar>
            </Fragment>
        )
    }


