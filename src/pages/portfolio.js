import Head from 'next/head'
import React from 'react'
import dynamic from 'next/dynamic'
import { Inter } from '@next/font/google'
import styles from '@/styles/Portfolio.module.scss'
import { Col, Container, Row } from 'reactstrap'
import CallToAction from 'components/About/CallToAction'

const inter = Inter({ subsets: ['latin'] })

const DynamicHeader = dynamic(() => import('components/Header/Header'), {
    ssr: false,
})
const DynamicFooter = dynamic(() => import('components/Footer/Footer'), {
    ssr: false,
})
const DynamicAwards = dynamic(() => import('components/About/awards'), {
    ssr: false,
})

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Leverage Your Business's Potential with Maze Digital Today!</title>
                <meta name="description" content="We deliver quality UI/UX designs, branding services, logo designing services, e-commerce, website, and web app development services, exclusively tailored for you." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <DynamicHeader />
                <section className={`${styles.banner} text-center`}>
                    <img src='images/portfolio-bg.png' className={`${styles.bg_image}`} />
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-4 col-md-8'>
                                <h1 className='text-white'>Portfolio</h1>
                                <p>Present our work where our clients were 100% satisfied with the outcome.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.portfolio}>
                    <Container>
                        <Row>
                            <Col className='col-12 text-center mb-4'>
                                <h2 className='fs-1 fw-bold text-capitalize'>A complete Software solution for you</h2>
                            </Col>

                            <Col className='col-12 mb-4'>
                                <div className={styles.cards_wrapper}>
                                    <div className={styles.card}>
                                        <img src='/images/port-1.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>On Demand App Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-2.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Ecommerce & <br /> Marketplace Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-3.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Food & Beverage Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-4.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Pickup & Delivery Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-5.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Blockchain Development</h3>
                                        </a>
                                    </div>
                                </div>
                            </Col>

                            <Col className='col-12 mb-4'>
                                <div className={`${styles.cards_wrapper} ${styles.reverse}`}>
                                    <div className={styles.card}>
                                        <img src='/images/port-6.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Internet of Things <br /> {`(IOT)`} </h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-7.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Healthcare & <br /> Medical Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-8.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Social Networking Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-9.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Laundry & <br /> Home Services</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-10.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Banking & Finace</h3>
                                        </a>
                                    </div>
                                </div>
                            </Col>

                            <Col className='col-12'>
                                <div className={styles.cards_wrapper}>
                                    <div className={styles.card}>
                                        <img src='/images/port-1.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Real Estate Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-2.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Transportation Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-3.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Enterprice Mobility Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-4.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Manufacturing Business Solution</h3>
                                        </a>
                                    </div>
                                    <div className={styles.card}>
                                        <img src='/images/port-5.png' alt="Portfolio" />
                                        <a href='/portfolio-detail' className={styles.content}>
                                            <h3 className='fs-4 fw-semibold text-white'>Education & Learning</h3>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <DynamicAwards />

                <section className={`${styles.clients_section}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-6 col-12 text-center'>
                                <h2 className='fs-1'>Our Clients</h2>
                                <p className='fs-5'>Experience A World-Class Mobile App Development Service from Best Mobile App Development   Company</p>
                            </Col>
                            <Col className='col-md-12 text-center'>
                                <img src='images/brand-logos.svg' alt='brand logo' className='w-100' />
                            </Col>
                        </Row>
                    </Container>
                </section>


                <CallToAction heading="Creating products" desc="to leverage your business everyday" />

                <DynamicFooter />
            </main>
        </>
    )
}

export default Portfolio