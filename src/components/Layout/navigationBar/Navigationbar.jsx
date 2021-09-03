import React,{ Fragment, useState }  from 'react';
import {Navbar, Container, Nav, NavDropdown, Button, Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Session from '../../Session'
import Register from '../../Register';
import hulkHand from '../../img/hulk-hand-png.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Navigationbar({show, setShow}) {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);
    const handleLogOut = () => {
      localStorage.removeItem('currentUser');
      setCurrentUser(null);
    }

    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src={hulkHand} alt="Hulk Hand!" id="hulk-logo"></img>
              Hulk Store
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>

                <Link to="Admin" className="nav-link">
                  Admin
                </Link>

                <NavDropdown title="Nuestras marcas" id="basic-nav-dropdown">
                  <NavDropdown.Item className="disabled">
                    DC Comics
                  </NavDropdown.Item>
                  <NavDropdown.Item className="disabled">
                    Marvel
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Link to="cart">
              {/* Button de Cart*/}
              <Button variant="outline-warning" className="me-2">
                <FontAwesomeIcon icon={faShoppingCart} />
                <Badge pill bg="danger" className="sm">
                  1
                </Badge>
              </Button>
            </Link>
            {currentUser? 
              (<Nav><NavDropdown title={`Hola ${currentUser.name}`} id="basic-nav-dropdown"> <NavDropdown.Item onClick={handleLogOut} href="#">Logout</NavDropdown.Item></NavDropdown></Nav>) : (<Fragment>
              <Session  setCurrentUser={setCurrentUser} />
              <Register />
            </Fragment>)}
            
          </Container>
        </Navbar>
      </Fragment>
    );
    }


