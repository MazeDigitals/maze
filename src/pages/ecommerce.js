import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google';
import { Col, Container, Row } from 'reactstrap';
import styles from '@/styles/Product.module.scss';


const inter = Inter({ subsets: ['latin'] })

const DynamicHeader = dynamic(() => import('components/Header/Header'), {
    ssr: false,
})
const DynamicFooter = dynamic(() => import('components/Footer/Footer'), {
    ssr: false,
})
const DynamicECommercePackages = dynamic(() => import('components/Home/ECommercePackages'), {
    ssr: false,
})
const Ecommerce = () => {
    return (
        <>
            <Head>
                <title>Leverage Your Business's Potential with Maze Digital Today!</title>
                <meta name="description" content="We deliver quality UI/UX designs, branding services, logo designing services, e-commerce, website, and web app development services, exclusively tailored for you." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <DynamicHeader />

                <section className={styles.banner}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h1 className='text-white'>Ecommerce</h1>
                                <p className='text-white'>The term "e-commerce" refers to the exchange of goods and services online. E-commerce platforms are significantly rising in tandem with an increase in the speed at which e-commerce startups and businesses are expanding due to their substantial and commendable market value. Maze Digital excels at comprehending your e-commerce designs and defining your company's value precisely as you have imagined, which we communicate through our e-commerce services.</p>
                                <a href='/' className={`btn-style text-uppercase ${styles.btn_style}`}>Get Started</a>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/ecommerce-img.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                    <img src="images/product-bg.png" alt='' />
                </section>

                <section className={`${styles.ecommerce_services} portfolio-detail`}>
                    <Container>
                        <Row className='align-items-center justify-content-between'>
                            <Col className='col-lg-5 col-md-6 col-12'>
                                <h2 className='fs-1'>Building a Dynamic <br /> E-Commerce Website</h2>
                                <p className='fs-5'>Build your dynamic e-commerce website by hiring our professionals at Maze Digital. With continuous updating in data, we guarantee an up-to-date built dynamic website.</p>
                                <a href='#' className='btn-style text-uppercase'>Get Started</a>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/ecommerce-1.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                        <Row className='flex-row-reverse align-items-center justify-content-between'>
                            <Col className='col-lg-5 col-md-6 col-12'>
                                <h2 className='fs-1'>Intuitive Mobile Apps</h2>
                                <p className='fs-5'>Developing easy-to-use mobile applications within a budget that suits your pocket right away. Ensure that your customers understand the application's workflow within milliseconds! Sign us up today!</p>
                                <a href='#' className='btn-style text-uppercase'>Get Started</a>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/ecommerce-2.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                        <Row className='align-items-center justify-content-between'>
                            <Col className='col-lg-5 col-md-6 col-12'>
                                <h2 className='fs-1'>Advanced Vendor Panel</h2>
                                <p className='fs-5'>Less is always more! By determining your niche by finding appropriate vendors to fill the inventory, we develop an advanced vendor panel where you can successfully sell your products in the online marketplace.</p>
                                <a href='#' className='btn-style text-uppercase'>Get Started</a>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/ecommerce-3.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                        <Row className='flex-row-reverse align-items-center justify-content-between'>
                            <Col className='col-lg-5 col-md-6 col-12'>
                                <h2 className='fs-1'>Powerful Admin Dashboard</h2>
                                <p className='fs-5'>A powerful admin dashboard where one can be alerted about website downtime, build-ups of support queries, low stock, drop-offs in ad performance, and negative PR or social media backlash is equally important. It allows at-a-glance access to key data, KPIs, reports, and other important details. We are skilled in creating a powerful admin dashboard here at Maze Digital.</p>
                                <a href='#' className='btn-style text-uppercase'>Get Started</a>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/ecommerce-4.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                    <img src="images/ecommerce-bg.png" className={styles.bg_img} alt='' />
                </section>

                <section className={styles.feature_section}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-5 col-md-8 col-12 text-center'>
                                <h2 className='fs-1 mb-5'><span className='d-block text-primary fs-3 mb-3'>FEATURES </span>Grow and Scale your E-Commerce Platform</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.card}>
                                    <p>Our tech experts are skilled in developing your e-commerce platform, providing a high-quality outcome satisfying your business's vision and mission.</p>
                                    <a href='#' className='text-primary fs-6 d-inline-block fw-semibold'>Tech Experts</a>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.card}>
                                    <p>For any e-commerce platform, an intuitive interface is important as it guarantees effective web store creation.</p>
                                    <a href='#' className='text-primary fs-6 d-inline-block fw-semibold'>Intuitive Interface</a>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.card}>
                                    <p>The payment processing feature is incorporated efficiently without any loopholes.</p>
                                    <a href='#' className='text-primary fs-6 d-inline-block fw-semibold'>Payment Processing</a>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.card}>
                                    <p>With popular CRM and CMS software, your website's performance is in the right hands.</p>
                                    <a href='#' className='text-primary fs-6 d-inline-block fw-semibold'>Data Consolidation</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.choose_section}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-7 col-md-8 col-12 text-center'>
                                <h2 className='fs-1 mb-5'><span className='d-block text-primary fs-3 mb-3'>WHY CHOOSE US </span>Avail the Best E-Commerce Services within an Affordable budget</h2>
                            </Col>

                            <Col className='col-lg-12'>
                                <div className={styles.card_wrap}>
                                    <div className={styles.card}>
                                        <img src="images/choose-1.svg" alt='icon' />
                                        <h3 className='fs-6 fw-normal mt-4'>Highly Competitive Pricing Models</h3>
                                    </div>
                                    <div className={styles.card}>
                                        <img src="images/choose-2.svg" alt='icon' />
                                        <h3 className='fs-6 fw-normal mt-4'>Customized Customer, Driver & admin app</h3>
                                    </div>
                                    <div className={styles.card}>
                                        <img src="images/choose-3.svg" alt='icon' />
                                        <h3 className='fs-6 fw-normal mt-4'>Pre-built Online Food Delivery App Solution</h3>
                                    </div>
                                    <div className={styles.card}>
                                        <img src="images/choose-4.svg" alt='icon' />
                                        <h3 className='fs-6 fw-normal mt-4'>Reviews, Ratings & Social Media Integration</h3>
                                    </div>
                                    <div className={styles.card}>
                                        <img src="images/choose-5.svg" alt='icon' />
                                        <h3 className='fs-6 fw-normal mt-4'>Digital Proof of Deliveryfor Agents</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={`${styles.pricing_section}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-8 col-12 text-center mb-2'>
                                <h2 className='fs-2'>PRICING</h2>
                                <p>Our pricing strategy is designed to meet the affordability of your pocket. Check out the most budget-friendly packages designed for each service.</p>
                            </Col>
                        </Row>
                    </Container>
                    <DynamicECommercePackages />
                </section>


                <section className={`${styles.custom_pack}`}>
                    <Container>
                        <Row className='justify-content-center align-items-center'>
                            <Col className='col-md-10 col-12 text-center mb-5'>
                                <h2 className='fs-1 text-white fw-semibold'>Custom Jumbo Pack</h2>
                            </Col>
                            <Col className='col-md-3 col-12'>
                                <h4 className='fs-6 text-white fw-semibold mb-3'>Website Design</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                </ul>
                            </Col>
                            <Col className='col-md-3 col-12'>
                                <h4 className='fs-6 text-white fw-semibold mb-3'>Mobile App Design</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                </ul>
                            </Col>
                            <Col className='col-md-3 col-12'>
                                <h4 className='fs-6 text-white fw-semibold mb-3'>Mobile App Design</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                </ul>
                            </Col>
                            <Col className='col-12 text-center'>
                                <a href='/' className='btn-style mt-5'>Get a Quote</a>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={`${styles.our_clients}`}>
                    <Container>
                        <div className={`${styles.content_box}`}>
                            <Row className='justify-content-between align-items-center'>
                                <Col className='col-md-5 col-12'>
                                    <h3 className='fs-1 text-white fw-semibold'><span className='text-white fw-medium d-block fs-5'>OUR CLIENTS</span>Trusted From Over 1,500 Clients</h3>
                                </Col>
                                <Col className='col-md-5 col-12'>
                                    <p className='text-white'>“Great team to work with, they understood my requirements and helped me go live within hours, and delivered the results ahead of schedule."</p>
                                    <a href='#' className='text-uppercase btn-style border shadow-none'>Get Started</a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                <DynamicFooter />
            </main>
        </>
    )
}

export default Ecommerce