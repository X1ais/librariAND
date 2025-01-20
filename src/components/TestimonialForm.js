import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { testimonialApi } from '../rest/TestimonialsApi'

export default class TestimonialForm extends Component {
    constructor(props) {
        super(props)

        this.fetchTestimonials = props.fetchTestimonials

        this.state = {
            name: '',
            text: '',
        }

    }

    handleRating(event) {
        this.setState({ rating: event })
    }

    handleName(event) {
        this.setState({ name: event.target.value })
    }

    handleTestimonial(event) {
        this.setState({ text: event.target.value })
    }

    handleSubmit = async (event) => {
        const testimonial = {
            ...this.state,
            createdAt: Date()
        }
        const data = await testimonialApi.post(event, testimonial)

        if (data.success) {
            event.target.reset()
        } else {
            console.log("Error", data)
        }
        event.target.reset()
        this.fetchTestimonials()
    }

    render() {
        return (
            <Form onSubmit={(event) => this.handleSubmit(event)}>

                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='name' onChange={(event) => this.handleName(event)} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Testimonial</Form.Label>
                    <Form.Control as='textarea' rows='5' name='testimonial' className='textarea' onChange={(event) => this.handleTestimonial(event)} required />
                </Form.Group>

                <button type='submit' className='mb-3'>Submit</button>
            </Form>
        )
    }
}
