import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import LargeWhiteLogo from '../resources/logo_large_white.png'
import PrivacyPolicy from '../resources/LibrariAND+Website+Privacy+Policy.pdf'
import FacebookIcon from '../resources/facebook-30.png'
import InstagramIcon from '../resources/instagram-30.png'
import LinkedInIcon from '../resources/linkedin-30.png'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <Container fluid>
                <div className='text-center'>
                    <div className='p-5'>
                        <img
                            className='d-block mx-auto img-fluid'
                            src={LargeWhiteLogo}
                            width='225px'
                            alt='The librariAND logo.'
                        />
                        <h5><i>A new direction for your library and community</i></h5>
                    </div>
                    <div>
                        <Stack className='justify-content-center' direction='horizontal' gap={3}>
                            <a href='https://www.instagram.com/official.librariand/'>
                                <img
                                    src={InstagramIcon}
                                    alt='Instagram Icon'
                                />
                            </a>
                            <a href='https://www.facebook.com/official.librariand'>
                                <img
                                    src={FacebookIcon}
                                    alt='Facebook Icon'
                                />
                            </a>
                            <a href='https://www.linkedin.com/in/hollyjacksonlibrarylady/'>
                                <img
                                    src={LinkedInIcon}
                                    alt='LinkedIn Icon'
                                />
                            </a>
                        </Stack>
                    </div>

                    <div className='pb-5' text-white>
                        <a href={PrivacyPolicy} target='blank'><small>Privacy Policy</small></a>
                    </div>
                </div>
            </Container>

        </footer>
    )
}
