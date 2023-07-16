import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const CallToAction = (props) => {
    return (
        <section className='cta-section'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='col-md-6 text-center'>
                        <h2 className='text-white mb-3'>{props.heading}</h2>
                        <p className='text-white mb-4'>{props.desc}</p>
                        <a href='/contact' className='btn-style'>Let's Connect</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CallToAction