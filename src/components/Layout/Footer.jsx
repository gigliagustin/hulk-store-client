import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer>
            <Container fluid className="bg-dark text-white" fixed="buttom">
                <div>
                    Hulk Store; Todos los derechos reservados &copy;
                </div>
            </Container>
        </footer>
    )
}
