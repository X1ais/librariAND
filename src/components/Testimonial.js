import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Testimonial extends Component {
    constructor(props) {
        super(props)

        this.id = props.id
        this.name = props.name
        this.text = props.text
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.name}</Card.Title>
                    <Card.Text>{this.text}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
