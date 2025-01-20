import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export default function ContactForm() {
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
                <Form.Control as="textarea" rows='4' name='message' className='textarea' required />
            </Form.Group>

            <span>{result}</span>
            <button type='submit'>Submit</button>
        </Form>


    )
}
