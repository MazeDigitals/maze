import Head from 'next/head'
import React from 'react'
import dynamic from 'next/dynamic'
import { Inter } from '@next/font/google'
import styles from '@/styles/Portfolio-detail.module.scss'
import { Col, Container, Row } from 'reactstrap'



const inter = Inter({ subsets: ['latin'] })

const DynamicHeader = dynamic(() => import('components/Header/Header'), {
    ssr: false,
})
const DynamicFooter = dynamic(() => import('components/Footer/Footer'), {
    ssr: false,
})


const PortfolioDetail = () => {
    return (
        <>
            <Head>
                <title>Leverage Your Business's Potential with Maze Digital Today!</title>
                <meta name="description" content="We deliver quality UI/UX designs, branding services, logo designing services, e-commerce, website, and web app development services, exclusively tailored for you." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${styles.portfolioDetail}`}>
                <DynamicHeader />
                <section className={`${styles.banner}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-12 col-12'>
                                <h2 className='fs-1 fw-semibold mb-5'>15 Essential UI Design Tips and Best Practices for <br className='d-none d-lg-block' /> Creating a Good User Interface</h2>
                                <figure>
                                    <img src='images/blog-banner.jpg' className={`w-100`} alt="banner" />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={`${styles.portfolio_detail} portfolio-detail`}>
                    <Container>
                        <Row className='justify-content-center align-items-center'>
                            <Col className='col-lg-5 col-12'>
                                <h2 className='fs-1 fw-bold mb-3'><span className='d-block fs-5 fw-medium mb-3'>LOREM IPSUM</span>Feature-Rich <br className='d-none d-lg-block' /> Ecommerce Websites</h2>
                                <p className='fs-6 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                            </Col>

                            <Col className='col-lg-5 col-12'>
                                <figure className='text-end'>
                                    <img src='images/port-detail-1.png' alt='img' />
                                </figure>
                            </Col>
                        </Row>
                        <Row className='justify-content-center align-items-center flex-row-reverse'>
                            <Col className='col-lg-5 col-12'>
                                <h2 className='fs-1 fw-bold mb-3'><span className='d-block fs-5 fw-medium mb-3'>LOREM IPSUM</span>Feature-Rich <br className='d-none d-lg-block' /> Ecommerce Websites</h2>
                                <p className='fs-6 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                            </Col>

                            <Col className='col-lg-5 col-12'>
                                <figure className='text-start'>
                                    <img src='images/port-detail-1.png' alt='img' />
                                </figure>
                            </Col>
                        </Row>
                        <Row className='justify-content-center align-items-center'>
                            <Col className='col-lg-5 col-12'>
                                <h2 className='fs-1 fw-bold mb-3'><span className='d-block fs-5 fw-medium mb-3'>LOREM IPSUM</span>Feature-Rich <br className='d-none d-lg-block' /> Ecommerce Websites</h2>
                                <p className='fs-6 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                            </Col>

                            <Col className='col-lg-5 col-12'>
                                <figure className='text-end'>
                                    <img src='images/port-detail-1.png' alt='img' />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='cta-section'>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-8 text-center'>
                                <p className='text-white text-uppercase fs-3 mb-4'>READY TO START?</p>
                                <h2 className='text-white mb-3'>Speak to an expert today about how Maze can ignite your vision.</h2>
                                <a href='#' className='btn-style mt-3'>Let's Connect</a>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <DynamicFooter />
            </main>
        </>
    )
}

export default PortfolioDetail;