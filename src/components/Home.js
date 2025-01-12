import React from 'react'
import { Container, Stack, Row, Col } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Container className='text-center'>
                <Stack gap={5}>
                    <h1>Librari<b>AND</b>: A New Direction Library Training and Consulting</h1>
                    <h3>Empowering A New Direction For Your Library And Community…</h3>
                    <h5>Easy to follow and easy to implement face-to-face trainings and flexible online courses to enhance your library, build powerful and empowering leadership and bolster your community.</h5>
                </Stack>
            </Container>
            <hr />
            <Container className='text-center'>
                <Row>
                    <Col>
                        <Stack gap={5}>
                            <h3>WHAT IF I TOLD YOU I COULD HELP YOU ENHANCE YOUR LIBRARY SERVICES WITHOUT ADDING TO YOUR BURNOUT OR OVERWHELM?</h3>
                            <p>LibrariAND has a single goal…to give your library and your community a new direction. We help educate and empower public librarians to modernize their systems, people, processes and goals so that they can impact lives and improve services in their communities. With our self-guided courses in addition to live trainings such as “Leadership at Every Level,” “Succession Planning Made Simple,” and “Being Friends With Your Board-Creating a Successful Board/Director Relationship” I am confident we have a training to support your library team!  </p>
                            <button>GET STARTED TODAY!</button>
                        </Stack>
                    </Col>
                    <Col>
                        <img
                            src='https://images.squarespace-cdn.com/content/v1/62ea8c36ba8f71542f1e52ca/330b0791-3969-4c8d-ac1d-9afc0d42782c/HollyHeadshots+%285+of+9%29.jpg?format=1000w'
                            width="450px"
                            alt='Holly Jackson'
                        />
                    </Col>
                </Row>
            </Container>

            <hr />

            <Container className='d-flex text-center'>
                <Row className='justify-content-between'>
                    <Col className='m-3'>
                        <Stack gap={3}>
                            <img
                                className='d-block mx-auto img-fluid w-300'
                                src='https://images.squarespace-cdn.com/content/v1/62ea8c36ba8f71542f1e52ca/936ae6f1-7f84-4c23-80d1-758312796b43/Untitled%2Bdesign%284%29%2Bcopy%2B2.png?format=750w'
                                alt='A computer desk with a laptop open to the librariAND homepage.'
                            />
                            <h3>Guided Videos</h3>
                            <p>Videos or presentations carefully produced by Holly and her team walk you step-by-step through the trainings making the information digestible and easy to implement.</p>
                        </Stack>
                    </Col>
                    <Col className='m-3'>
                        <Stack gap={3}>
                            <img
                                className='d-block mx-auto img-fluid w-300'
                                src='https://images.squarespace-cdn.com/content/v1/62ea8c36ba8f71542f1e52ca/d8fc2e58-7c84-4f3a-b1f2-4e01b4fdf311/DSC00926.png?format=750w'
                                alt='An open workbook turned to a page diagraming an idea.'
                            />
                            <h3>Dedicated Worksheets</h3>
                            <p>Every lesson includes a dedicated worksheet or guided activity to help you follow along, plan your next steps and put everything you learn into action.</p>
                        </Stack>
                    </Col>
                    <Col className='m-3'>
                        <Stack gap={3}>
                            <img
                                className='d-block mx-auto img-fluid w-300'
                                src='https://images.squarespace-cdn.com/content/v1/62ea8c36ba8f71542f1e52ca/c86ee9eb-e93c-4d07-8c8c-580830bd9c98/profile-of-woman-with-books-near-bookshelves-2021-12-20-17-59-50-utc.jpg?format=1000w'
                                alt='A woman looking at a library book shelf.'
                            />
                            <h3>Experience Based Results</h3>
                            <p>These are real principles Holly has learned and refined through years of education, training and experience.</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
