import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar expand='md' className='bg-body-tertiary'>
            <Container fluid>
                <Navbar.Brand href='/'>librari<b>AND</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/messages">Messages</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
