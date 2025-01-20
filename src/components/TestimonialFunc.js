import React, { useState, useRef } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Rating, IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit';
import { testimonialApi } from '../rest/TestimonialsApi'

export const TestimonialFunc = (props) => {
    const { testimonial, fetchTestimonials } = props
    const [isEditable, setIsEditable] = useState(false)
    const inputRef = useRef(null)
    var state = { ...testimonial }

    async function onDelete(id) {
        await testimonialApi.delete(id)
        this.fetchTestimonials()
    }

    function editText() {
        setIsEditable(true)
        inputRef.current.focus()
    }

    function handleText(e) {
        state = { ...testimonial, text: e.target.value }
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className='mb-3'>
                    {testimonial.name}
                    <Rating value={testimonial.rating} readOnly />
                    <IconButton aria-label='delete' onClick={() => onDelete(testimonial.id)}>
                        <ClearIcon />
                    </IconButton>
                </Card.Title>

                <Card.Text>
                    <Row>
                        <Col>
                            <textarea
                                rows={3}
                                readOnly={!isEditable}
                                ref={inputRef}
                                onChange={(event) => handleText(event)}
                                onBlur={() => {
                                    setIsEditable(false)
                                }}>
                                {testimonial.text}
                            </textarea>
                        </Col>

                        <Col sm='auto'>
                            <IconButton aria-label='edit' onClick={() => editText()}>
                                <EditIcon />
                            </IconButton>
                        </Col>
                    </Row>


                </Card.Text>
            </Card.Body>
        </Card >
    )
}
