import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Testimonials.css'
import TestimonialForm from './TestimonialForm'
import { testimonialApi } from '../rest/TestimonialsApi'
import { TestimonialFunc } from './TestimonialFunc'

export default class Testimonials extends Component {
    state = {
        testimonials: []
    }

    componentDidMount() {
        this.fetchTestimonials()
    }

    fetchTestimonials = async () => {
        const testimonials = await testimonialApi.get()
        this.setState({ testimonials })
    }

    render() {
        return (
            <div>
                <Container >
                    <div className='text-center m-4'>
                        <h3>Testimonials</h3>
                    </div>

                    <Row>
                        <Col xs={8} className='testimonials-wrapper'>
                            {this.state.testimonials.map((testimonial) => (
                                <
                                    div key={testimonial.id} className='mb-3'>
                                    <TestimonialFunc
                                        testimonial={testimonial}
                                        id={testimonial.id}
                                        name={testimonial.name}
                                        rating={testimonial.rating}
                                        text={testimonial.text}
                                        fetchTestimonials={this.fetchTestimonials}
                                    />
                                </div>
                            ))}
                        </Col>

                        <Col>
                            <h4 className='text-center'>Leave your own testimonial.</h4>
                            <TestimonialForm testimonials={this.testimonials} fetchTestimonials={this.fetchTestimonials} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
