import Head from 'next/head'
import React from 'react'
import dynamic from 'next/dynamic'
import { Inter } from '@next/font/google'
import styles from '@/styles/Portfolio-detail.module.scss'
import { Col, Container, Row } from 'reactstrap'
import Link from 'next/link'



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
                                <h2 className='fs-1 fw-bold mb-3'><span className='d-block fs-5 fw-medium mb-3'>Essential UI: Mastery</span>Crafting Engaging, <br className='d-none d-lg-block' />  Intuitive Interfaces</h2>
                                <p className='fs-6 fw-normal'>Unlock the secrets to exceptional UI design with our comprehensive guide. Discover the essential elements that make up a captivating user interface and learn how to master them. From color schemes and typography to layout and navigation, we delve into the key principles and best practices that will elevate your design skills. Whether you're a beginner or a seasoned pro, this resource-packed article will equip you with the knowledge and techniques you need to create interfaces that truly engage and delight users. Take your UI design to the next level and make a lasting impact with your digital creations.</p>
                            </Col>

                            <Col className='col-lg-5 col-12'>
                                <figure className='text-end'>
                                    <img src='images/port-detail-1.png' alt='img' />
                                </figure>
                            </Col>
                        </Row>
                        <Row className='justify-content-center align-items-center flex-row-reverse'>
                            <Col className='col-lg-5 col-12'>
                                <h2 className='fs-1 fw-bold mb-3'><span className='d-block fs-5 fw-medium mb-3'>UI Pro Tips</span>Elevating User  <br className='d-none d-lg-block' /> Experiences Together</h2>
                                <p className='fs-6 fw-normal'>Discover the expert secrets of UI design with our invaluable pro tips. Dive into the world of user interfaces and learn how to create captivating experiences that leave a lasting impression. From intuitive navigation to pixel-perfect layouts, we cover the essential techniques that will take your UI design skills to new heights. Whether you're a novice designer or a seasoned professional, our comprehensive guide will equip you with the knowledge and insights needed to craft interfaces that truly resonate with users. Join us on this journey of UI excellence and elevate your design game today.</p>
                            </Col>

                            <Col className='col-lg-5 col-12'>
                                <figure className='text-start'>
                                    <img src='images/port-detail-1.png' alt='img' />
                                </figure>
                            </Col>
                        </Row>
                        <Row className='justify-content-center align-items-center'>
                            <Col className='col-lg-5 col-12'>
                                <h2 className='fs-1 fw-bold mb-3'><span className='d-block fs-5 fw-medium mb-3'>UI Essentials</span>Creating Smooth <br className='d-none d-lg-block' /> User Experiences</h2>
                                <p className='fs-6 fw-normal'>Uncover the fundamental principles of UI design with our comprehensive guide to UI Essentials. Dive into the world of user interfaces and learn how to create seamless experiences that captivate users. From intuitive interactions to effective visual hierarchy, we explore the essential elements that contribute to exceptional UI design. Whether you're a beginner or an experienced designer, our practical tips and best practices will empower you to craft interfaces that are not only visually stunning but also highly usable. Join us on this journey as we unravel the secrets of UI design and help you create interfaces that truly shine.</p>
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
                                <Link href='/contact' className='btn-style mt-3'>Let's Connect</Link>
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