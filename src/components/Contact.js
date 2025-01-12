import React from 'react'
import { Container, Row, Col, Stack, Form, Button } from 'react-bootstrap'

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a902004f-a089-4840-8b78-3721833108f8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

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
                    <Form onSubmit={onSubmit}>

                        <Row>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type='text' name='firstName' required />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type='text' name='lastName' required />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' name='email' required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type='text' name='subject' required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows='4' name='message' style={{ resize: 'none' }} required />
                        </Form.Group>

                        <Button type='submit' style={{ float: 'right' }}>Submit</Button>
                    </Form>

                    <span>{result}</span>

                </Col>
            </Row>
        </Container>
    )
}
