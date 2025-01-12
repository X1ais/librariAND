import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import '../styles/Testimonials.css'
import Testimonial from './Testimonial'

export default class Messages extends Component {
    constructor() {
        super()

        this.testimonials = [
            {
                id: 1,
                name: 'Danita W.',
                text: 'Holly explained everything very effectively and it was easy to understand. Her workbook will be an excellent tool...It is apparent that she is very knowledgeable in her area of expertise.',
            },
            {
                id: 2,
                name: 'Alycia N.',
                text: 'Relevant information, confident delivery, balanced control of instruction and personal questions fluidly.',
            },
            {
                id: 3,
                name: 'Christine E.',
                text: 'Very informative presentation! The workbook pages are super helpful in breaking down the different aspects of a succession plan and why it\'s important to have one. Would recommend this training to anyone in the library world.',
            },
            {
                id: 4,
                name: 'Jennifer D.',
                text: 'This [course] breaks down a very daunting task into doable pieces. Thank you. Great job.',
            },
            {
                id: 5,
                name: 'Jezmynne A.',
                text: 'Holly Jackson is a highly competent and innovative thinker in the library world, and one of her many strengths is thinking outside the box to come up with ingenious solutions to common problems.',
            },
            {
                id: 6,
                name: 'Scotti O.',
                text: 'I really appreciate the acknowledgement of the unique challenges of managing a small rural library. Excellent webinar, excellent handout.',
            },
            {
                id: 7,
                name: 'Maegan H.',
                text: 'Holly is one of the best librarians I have ever had the privilege to work with. She has such a talent for thinking outside the box and pairing it with her vast library experience to find solutions to the problems libraries face.',
            },
            {
                id: 8,
                name: 'Quentin H.',
                text: 'Very skilled and engaging.',
            },
            {
                id: 9,
                name: 'Annie W.',
                text: 'I really loved Holly\'s energy and enthusiasm for sharing her expertise! The workbook is a fantastic resource and will be helpful moving forward.',
            },
            {
                id: 10,
                name: 'Brian',
                text: 'Holly is super personable and always reliable. I really enjoyed these courses and fully plan on recommending them to my coworkers....',
            },
        ]
    }
    render() {
        return (
            <div>
                <Container >
                    <div className='text-center m-4'>
                        <h3>Testimonials</h3>
                    </div>

                    <Row>
                        <Col xs={8}>
                            {this.testimonials.map((testimonial, index) => (
                                <div key={index} className='mb-3'>
                                    <Testimonial
                                        id={testimonial.id}
                                        name={testimonial.name}
                                        text={testimonial.text}
                                    />
                                </div>
                            ))}
                        </Col>

                        <Col className='bg-body-tertiary p-3' style={{ borderRadius: "10px" }}>
                            <h4 className='text-center'>Leave your own testimonial.</h4>
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
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
