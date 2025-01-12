import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function TestimonialForm() {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Testimonial</Form.Label>
                <Form.Control as='textarea' rows='5' name='testimonial' className='textarea' required />
            </Form.Group>

            <Button type='submit'>Submit</Button>
        </Form>
    )
}
