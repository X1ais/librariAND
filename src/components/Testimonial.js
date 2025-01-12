import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Rating } from '@mui/material'

export default class Testimonial extends Component {
    constructor(props) {
        super(props)

        this.name = props.name
        this.rating = props.rating
        this.text = props.text
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.name} <Rating value={this.rating} precision={0.5} readOnly /></Card.Title>
                    <Card.Text>{this.text}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
