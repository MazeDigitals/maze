import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google';
import { Col, Container, Row } from 'reactstrap';
import styles from '@/styles/Contact.module.scss';
import { FaRegEnvelope } from 'react-icons/fa';
import CallToAction from 'components/About/CallToAction';

const inter = Inter({ subsets: ['latin'] })

const DynamicHeader = dynamic(() => import('components/Header/Header'), {
    ssr: false,
})
const DynamicFooter = dynamic(() => import('components/Footer/Footer'), {
    ssr: false,
})


const Contact = () => {
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

                <section className={`${styles.contact_info}`}>
                    <Container>
                        <Row className='justify-content-center align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h1 className='fw-bold mb-3'>Let's chat. <br /> Tell me about your <br className='d-none d-lg-block' /> project.</h1>
                                <p>Let's level up your brand, together.</p>

                                <div className={styles.info_wrap}>
                                    <FaRegEnvelope />
                                    <div>
                                        <h3 className='fs-6 mb-0 fw-semibold'>Sale</h3>
                                        <a href='mailto:sales@mazedigital.com'>sales@mazedigital.com</a>
                                    </div>
                                </div>
                                <div className={styles.info_wrap}>
                                    <FaRegEnvelope />
                                    <div>
                                        <h3 className='fs-6 mb-0 fw-semibold'>Info</h3>
                                        <a href='mailto:info@mazedigital.com'>info@mazedigital.com</a>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className={styles.form_section}>
                                    <h2 className='fw-semibold mb-3'>Send us a message</h2>
                                    <div className={`${styles.input_field}`}>
                                        <input type="email" className='w-100 form-control' placeholder='Business Email' />
                                    </div>
                                    <div className={`${styles.input_field} ${styles.mobile_no}`}>
                                        <input type="number" className='form-control' placeholder='+92' />
                                        <input type="number" className='w-100 form-control' placeholder='Phone Number' />
                                    </div>
                                    <div className={`${styles.input_field}`}>
                                        <input type="text" className='w-100 form-control' placeholder='Your Name' />
                                    </div>
                                    <div className={`${styles.input_field}`}>
                                        <textarea type="text" className='w-100 form-control' placeholder='Your message'>

                                        </textarea>
                                    </div>
                                    <button className='btn-style w-100 mt-3'>Send</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <CallToAction heading="Level up Your Business's Potential With Us Today" desc="" />

                <DynamicFooter />
            </main>
        </>
    )
}

export default Contact