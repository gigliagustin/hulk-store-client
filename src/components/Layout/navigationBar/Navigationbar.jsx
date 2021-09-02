import React,{ Fragment }  from 'react';
import {Navbar, Container, Nav, NavDropdown, Button, Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Session from '../../Session'
import Register from '../../Register';
import hulkHand from '../../img/hulk-hand-png.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Navigationbar({show, setShow}) {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="../Footer.jsx">
                    <img src={hulkHand}alt="Hulk Hand!"id="hulk-logo"></img>
                    Hulk Store
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav>
                        <Link to="store" className="nav-link">Tienda</Link>
                    </Nav>
                    <Nav>
                        <Link to="Admin" className="nav-link">Admin</Link> 
                    </Nav>
                    <NavDropdown title="Nuestras marcas" id="basic-nav-dropdown">
                    <NavDropdown.Item className="disabled">DC Comics</NavDropdown.Item>
                    <NavDropdown.Item className="disabled">Marvel</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                {/* Button de Cart*/}
                <Button variant="outline-warning">
                
                <FontAwesomeIcon icon={faShoppingCart} />
                <Badge pill bg="danger">1</Badge>
                </Button>
                {/* Modal de inicio de sesión */}
                    <Session />
                {/*Modal de registro*/}
                    <Register />
            </Container>
            </Navbar>
        </Fragment>
    )
    }


