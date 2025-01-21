import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    Container,
    Row,
    Col,
    Modal
} from 'reactstrap';
import styles from './Header.module.scss'
import logo from '../../src/images/logo.svg'
import { FaChevronDown, FaPhoneAlt, } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';
import Sidebar from 'components/Sidebar/Sidebar';
import { BsXLg } from "react-icons/bs";
import Link from 'next/link';




const AboutMegaMenu = () => {
    return (
        <div className={`bg-white ${styles.mega_menu_wrap}`}>
            <Container>
                <Row className='align-items-start'>
                    <Col className="col-md-3">
                        <h3 className='fs-5 fw-semibold'>About us</h3>
                        <p className='fs-7 fw-normal'>Join us to avoid obscure, irrelevant, complicated, and, most importantly, expensively designed solutions!</p>
                    </Col>
                    <Col className={`col-md-6 ${styles.border_left}`}>
                        <h3 className='fs-6 fw-semibold'>Explore</h3>
                        <ul>
                            <li>
                                <Link href='#'>Our Mission <span>Maze Digital's mission is to help you successfully win and penetrate the market.</span></Link>
                            </li>
                            <li>
                                <Link href='/about#work_section'>How we work <span>With Maze Digital, you get the most affordable, budget-friendly services.</span></Link>
                            </li>
                            <li>
                                <Link href='#'>Why Choose Us <span>Our company's mission is to provide excellent services at affordable rates.</span></Link>
                            </li>
                            <li>
                                <Link href='#'>Testimonial <span>I approached Maze Digital to design my UI/UX for the application I’ve been working on. I was really happy to see the results.</span></Link>
                            </li>
                        </ul>

                    </Col>
                    <Col className="col-md-3">
                        <ul className='text-center'>
                            <li>
                                <h3 className='fs-3 fw-semibold text-primary'>12 <span className='d-block fs-8 fw-medium'>Years</span></h3>
                            </li>
                            <li>
                                <h3 className='fs-3 fw-semibold text-primary'>350+ <span className='d-block fs-8 fw-medium'>Employees</span></h3>
                            </li>
                            <li>
                                <h3 className='fs-3 fw-semibold text-primary'>350+ <span className='d-block fs-8 fw-medium'>Clients</span></h3>
                            </li>
                            <li>
                                <h3 className='fs-3 fw-semibold text-primary'>350+ <span className='d-block fs-8 fw-medium'>Projects</span></h3>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const ServiceMegaMenu = () => {
    return (
        <div className={`bg-white ${styles.mega_menu_wrap}`}>
            <Container>
                <Row className='align-items-start'>
                    <Col className="col-md-3">
                        <h3 className='fs-5 fw-semibold'>Our Services</h3>
                        <p className='fs-7 fw-normal'>Leveraging your business's potential, providing high-end designs and development services, resulting in quality outcomes.</p>
                    </Col>
                    <Col className={`col-md-6 ${styles.border_left}`}>
                        <h3 className='fs-6 fw-semibold'>Services</h3>
                        <ul>
                            <li>
                                <Link href='/product-design'>UI/UX Design <span>With a great user interface and user experience, we ensure to define your business's motive just as you want it to be.</span></Link>
                            </li>
                            <li>
                                <Link href='/web-development'>Web Development <span>The world is moving towards believing that websites can do wonders in digitally growing a business's potential.</span></Link>
                            </li>
                            <li>
                                <Link href='/ecommerce'>Ecommerce <span>The E-Commerce market is significantly growing at a much faster pace than ever. </span></Link>
                            </li>
                            <li>
                                <Link href='/wordpress-web-development'>WordPress Web Development <span>We provide WordPress Web Development services, keeping specific business niches in mind.</span></Link>
                            </li>
                        </ul>

                    </Col>
                    <Col className="col-md-3">
                        <h3 className='fs-6 fw-semibold'>How we work</h3>
                        <ul className={`flex-column ${styles.column_list}`}>
                            {/* <li className='w-100'>
                            <a>Project Kickoff <span>We first kick off the project by meeting with our client</span></a>
                        </li> */}
                            <li className='w-100'>
                                <a>Discovery <span>Explore. Research. Understand. </span></a>
                            </li>
                            <li className='w-100'>
                                <a>Design <span>Conceptualize. Create. Refine..</span></a>
                            </li>
                            <li className='w-100'>
                                <a>Development <span>Build. Test. Refine. </span></a>
                            </li>
                            <li className='w-100'>
                                <a>Implementation <span>Launch. Monitor. Optimize.</span></a>
                            </li>
                            <li className='w-100'>
                                <a>Quality Assurance <span>Review. Test. Improve. </span></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


function Header() {
    const [showEstimationModal, setShowEstimationModal] = useState(false);
    const openEstimationModal = () => setShowEstimationModal(!showEstimationModal);

    // Sticky Navbar 
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    // Sticky Navbar 

    if (isMobile) {
        return (
            <Sidebar />
        )
    }

    return (
        <header className={`${styles.header} ${isSticky ? 'isSticky' : ''}`}>
            <Container>
                <Navbar>
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={116} height={32} />
                    </Link>
                    <Nav className={`ms-auto ${styles.navlist}`}>
                        <NavItem className={styles.nav_item}>
                            <Link className={`${styles.nav_link}`} href="/about">About Us</Link>
                            <AboutMegaMenu />
                        </NavItem>
                        <NavItem className={styles.nav_item}>
                            <Link className={`${styles.nav_link}`} href="/">Services <FaChevronDown /></Link>
                            <ServiceMegaMenu />
                        </NavItem>
                        <NavItem className={styles.nav_item}>
                            <Link className={`${styles.nav_link}`} href="/portfolio">Portfolio</Link>
                        </NavItem>
                        <NavItem className={styles.nav_item}>
                            <Link className={`${styles.nav_link}`} href="#pricing">Pricing</Link>
                        </NavItem>
                        <NavItem className={styles.nav_item}>
                            <Link className={`${styles.nav_link}`} href="/blogs">Blogs</Link>
                        </NavItem>
                        <NavItem className={styles.nav_item}>
                            <Link className={`${styles.nav_link}`} href="/contact">Contact us</Link>
                        </NavItem>
                        <NavItem className={styles.nav_item}>
                            <Link className={`${styles.nav_link} d-inline-flex align-items-center`} href='tel:+1 509-232-9749'><FaPhoneAlt /> +1 509-232-9749</Link>
                        </NavItem>
                        <NavItem className={styles.nav_item}>
                            <button onClick={openEstimationModal} className={`btn-style m-0`}>ESTIMATE PROJECT</button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>


            <Modal isOpen={showEstimationModal} keyboard={false} backdrop={'static'} centered toggle={openEstimationModal}>
                <div className={`form_section border-0 px-4 py-4`}>
                    <span onClick={openEstimationModal} className='close-btn'><BsXLg /></span>
                    <h3 className='fw-semibold mb-3'>Not sure about pricing?</h3>
                    <p className='mb-4'>Let's get connected and level up your brand.</p>
                    <div className={`input_field`}>
                        <input type="text" className='w-100' placeholder='Name' />
                    </div>
                    <div className={`input_field`}>
                        <input type="text" className='w-100' placeholder='Phone Number' />
                    </div>
                    <div className={`input_field`}>
                        <input type="text" className='w-100' placeholder='Email' />
                    </div>
                    <div className={`input_field`}>
                        <textarea type="text" className='w-100' placeholder='Message'>

                        </textarea>
                    </div>
                    <button className='btn-style w-100'>Lets Connect</button>
                </div>
            </Modal>
        </header>
    )
}

export default Header


