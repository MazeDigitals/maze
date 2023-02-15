import React from 'react'
import { Col, Container, Row, UncontrolledCollapse } from 'reactstrap';
import styles from './Footer.module.scss';
import { FaChevronDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import Image from 'next/image';
import { isMobile } from 'react-device-detect';



const Footer = () => {
    if (isMobile) {
        return (
            <footer className={styles.footer_mobile}>
                <Container>
                    <Row>
                        <Col className='col-12'>
                            <p className='fs-8 text-white mb-3'>With Maze Digital, a plus point is never worrying about how much we will charge to develop your desired website, e-commerce platform, logo, UI/UX, and branding strategies. It is an easy-to-follow business building experience where our team will give regular feedback, suggestions, and updates regarding the process.</p>
                            <div className={styles.footer_menu}>
                                <div className={styles.menu_wrap}>
                                    <button id="toggler">Services <FaChevronDown /></button>
                                    <UncontrolledCollapse toggler="#toggler" className={styles.collapse_wrap}>
                                        <ul>
                                            <li><a href='/'>UI/UX Design</a></li>
                                            <li><a href='/'>Web Development</a></li>
                                            <li><a href='/'>Ecommerce</a></li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </div>
                                <div className={styles.menu_wrap}>
                                    <button id="toggler-1">Locations <FaChevronDown /></button>
                                    <UncontrolledCollapse toggler="#toggler-1" className={styles.collapse_wrap}>
                                        <p className='text-white'>7901, 4th st N STE 5217, St.Peterburg FL, USA 33702</p>
                                        <p className='text-white'>Unit 13 1940 Ironstone Drive, Burlington, ON, Canada L5A3L7</p>
                                        <p className='text-white'>Office # 216, Tehseen Tower, PECHS Block 7/8</p>
                                    </UncontrolledCollapse>
                                </div>
                                <div className={styles.menu_wrap}>
                                    <button id="toggler-2">Get in touch <FaChevronDown /></button>
                                    <UncontrolledCollapse toggler="#toggler-2" className={styles.collapse_wrap}>
                                        <ul>
                                            <li><a href='mailto:sales@mazedigitals.com' className='fs-6 d-inline-flex'><FaRegEnvelope /> sales@mazedigitals.com <br />info@mazedigitals.com</a></li>
                                            <li><a href='tel:+1 330-999-8028' className='fs-6'><FaPhoneAlt /> +1 330-999-8028</a></li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </div>
                                <ul className={`${styles.socialIcons}`}>
                                    <li><a href='#'><FaLinkedinIn /></a></li>
                                    <li><a href='#'><FaFacebookF /></a></li>
                                    <li><a href='#'><FaInstagram /></a></li>
                                </ul>
                                <p className='text-center text-white fs-7 mb-2'>© 2023 Maze Digital. All rights reserved </p>
                                <p className='text-center text-white fs-7'>
                                    <a className='text-white' href='#'>Terms of Use</a> |
                                    <a className='text-white' href='#'>Privacy Policy</a> |
                                    <a className='text-white' href='#'>Guidelines</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
    return (
        <>
            <footer className={`${styles.footer}`}>
                <Container>
                    <Row>
                        <Col className='col-lg-4'>
                            <a href='/'><Image src='/images/footer-logo.svg' width={116} height={32} alt="logo" /></a>
                            <p className='text-white fs-8 mt-3'>With Maze Digital, a plus point is never worrying about how much we will charge to develop your desired website, e-commerce platform, logo, UI/UX, and branding strategies. It is an easy-to-follow business building experience where our team will give regular feedback, suggestions, and updates regarding the process.</p>

                            <ul className={`${styles.socialIcons}`}>
                                <li><a href='#'><FaLinkedinIn /></a></li>
                                <li><a href='#'><FaFacebookF /></a></li>
                                <li><a href='#'><FaInstagram /></a></li>
                            </ul>
                        </Col>
                        <Col className='col-lg-2'>
                            <h3>Services</h3>
                            <ul>
                                <li><a href='#'>UI/UX Design</a></li>
                                <li><a href='#'>Design Service</a></li>
                                <li><a href='#'>Web Development</a></li>
                                <li><a href='#'>Ecommerce</a></li>
                            </ul>
                        </Col>
                        <Col className='col-lg-3'>
                            <h3>Get in Touch</h3>
                            <ul>
                                <li><a href='mailto:sales@mazedigitals.com' className='d-inline-flex'><FaRegEnvelope /> sales@mazedigitals.com <br />info@mazedigitals.com</a></li>
                                <li><a href='tel:+1 330-999-8028'><FaPhoneAlt /> +1 330-999-8028</a></li>
                            </ul>
                        </Col>
                        <Col className='col-lg-3'>
                            <h3>Locations</h3>
                            <ul>
                                <li><address>7901, 4th st N STE 5217,
                                    St.Peterburg FL, USA 33702</address></li>
                                <li><address>Unit 13 1940 Ironstone Drive, Burlington, ON, Canada L5A3L7</address></li>
                                <li><address>Office # 216, Tehseen Tower, PECHS Block 7/8</address></li>
                            </ul>
                        </Col>
                        <Col className='col-12 mt-4'>
                            <ul className='d-flex align-items-center'>
                                <li><p>© 2023 Maze Digital. All rights reserved </p></li>
                                <li><a href='#' className='me-2'>Terms and Condition</a></li>
                                <li><a href='#'>Privacy Policy</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer