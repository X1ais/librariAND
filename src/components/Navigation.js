import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../styles/Navigation.css'
import Logo from '../resources/logoWIDE_medium.png'

export default function Navigation() {
    return (
        <Navbar expand='md' className='bg-body-tertiary sticky-nav'>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <img src={Logo} width='200px' alt='LibrariAND logo.' />
                </Navbar.Brand>
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
