import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import '../styles/Contact.css'
import ContactForm from './ContactForm';

export default function Contact() {

    return (
        <Container className='mt-3 pb-5'>
            <Row>
                <Col>
                    <Stack gap={4} className='mt-5'>
                        <h3>Get in touch...</h3>
                        <p>
                            Have a question about what we do, our courses or anything in-between? We have answers! Use the following
                            form to submit your inquiry and our team will get back to you within 48 hours.
                        </p>
                    </Stack>

                </Col>
                <Col className='mt-5 bg-body-tertiary p-3' style={{ borderRadius: "10px" }}>
                    <ContactForm />

                </Col>
            </Row>
        </Container>
    )
}
