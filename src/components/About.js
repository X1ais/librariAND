import React from 'react'
import { Container, Stack, Col } from 'react-bootstrap'

export default function About() {
    return (
        <Container>
            <Stack direction='horizontal' gap={5}>
                <Stack gap={5}>
                    <Col className='mt-4'>
                        <h1>Hey there, I'm Holly!</h1>
                        <p>
                            I’ve been working in libraries for more than 15 years.  Most recently, I was the director of the Portneuf Library in Chubbuck,
                            Idaho. I have experience in both public libraries and university  libraries, as well as a variety of positions in the library
                            world.  I have a  Master of Library Science degree with advanced certificates  in Youth Services, as well as Advanced Management
                            in Libraries and  Information Agencies.
                        </p>
                        <p>
                            Throughout my time in libraries, I have done everything from shelving to community outreach to training, managing, and contract
                            consulting…and I can honestly say that I’ve loved almost every minute of it.
                        </p>
                        <p>
                            I learned early in my career that there was nothing more rewarding  than connecting with people and seeing their empowerment when
                            they learn  something new. I made it my goal to create as many of those opportunities as possible with my staff and my community.
                        </p>
                        <p>
                            I realized that if all of my time could be spent teaching people and giving them the opportunity to think outside the box to
                            create amazing things at their library and for their community, I would seize that opportunity. And so librariAND was born.
                        </p>
                        <p>
                            As I’ve worked with my own library and others to modernize their systems, people, process & goals, their communities have grown
                            stronger. Employees want to stick around and be engaged with their work. I’ve seen this new direction impact lives, and I wanted to
                            create a variety of courses and trainings to help make those changes to libraries & communities throughout the world.
                        </p>
                        <p>
                            Thank you for checking out LibrariAND, and I hope we get to work together soon!
                        </p>
                        <img
                            src='https://images.squarespace-cdn.com/content/v1/62ea8c36ba8f71542f1e52ca/c6b179e1-6757-41dd-9d8c-7837576ee4a2/Lesson+1+copy+6.png?format=500w'
                            width="200px"
                            alt='The signature of Holly Jackson'
                        />
                    </Col>
                </Stack>

                <Col>
                    <img
                        src='https://images.squarespace-cdn.com/content/v1/62ea8c36ba8f71542f1e52ca/3ebc3722-c8f3-4728-ba81-82aa0a540314/JacksonFamily-157+%281%29.jpg?format=1000w'
                        width="500px"
                        alt='The owner, Holly Jackson'
                    />
                </Col>
            </Stack>
        </Container>
    )
}
