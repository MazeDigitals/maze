import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from '@/styles/Home.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useSwiperRef from './useSwiperRef';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



function WebPackages() {
    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();


    const responsive = {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

    return (
        <>
            <div className='position-relative'>
                <div className="slider-btn-wrap">
                    <button ref={prevElRef}><img src='/images/arrow-left.svg' alt="icon" /></button>
                    <button ref={nextElRef}><img src='/images/arrow-right.svg' alt="icon" /></button>
                </div>
                <Container>
                    <Row>
                        <Col className='col-12'>
                            <Swiper
                                loop={true}
                                navigation={{
                                    prevEl,
                                    nextEl,
                                }}
                                slidesPerView={1.1}
                                centeredSlides={false}
                                breakpoints={responsive}
                                spaceBetween={10}
                                modules={[Navigation]}
                                className="mySwiper py-md-4 px-md-3 px-1 py-3"
                            >
                                <SwiperSlide>
                                    <div className={`pricing_card`}>
                                        <div className={`p-5 text-center border_bottom`}>
                                            <span>Starter Package</span>
                                            <p>The package includes services to kick-start your business with our design and development services, consultation, and multiple revisions.</p>
                                            <h3 className='fs-3 fw-semibold'>$489/m</h3>
                                            <a href='' className={`button`}>Get Started</a>
                                        </div>
                                        <div className='p-5'>
                                            <ul>
                                                <li>3 Pages website</li>
                                                <li>2 stock photos</li>
                                                <li>1 banner design</li>
                                                <li>1 jQuery slider banner</li>
                                                <li>Complete W3C Certified HTML</li>
                                                <li>48 to 72 hours TAT</li>
                                                <li>Domain name {`(1 Year registeration)`}</li>
                                                <li>Cloud Hosting {`(1 year)`}</li>
                                                <li>SSL Certificate</li>
                                                <li>2 Email ID's</li>
                                                <li>100% Ownership Rights</li>
                                                <li>100% Satisfaction Guarantee</li>
                                                <li>100% Unique Design Guarantee</li>
                                                <li>CMS will be additional</li>
                                                <li>Mobile responsive will be additional</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`pricing_card`}>
                                        <div className={`p-5 text-center border_bottom`}>
                                            <span>The Ultimate package</span>
                                            <p>The Ultimate package includes basic and customized services suited to your needs.</p>
                                            <h3 className='fs-3 fw-semibold'>$989/m</h3>
                                            <a href='' className={`button`}>Get Started</a>
                                        </div>
                                        <div className='p-5'>
                                            <ul>
                                                <li>Up to 8 pages website</li>
                                                <li>up to 5 stock images</li>
                                                <li>2 banner designs</li>
                                                <li>1 jQuery slider banner</li>
                                                <li>Complete W3C Certified HTML</li>
                                                <li>Google Map integration</li>
                                                <li>Social Media Integration</li>
                                                <li>CMS/ Admin panel</li>
                                                <li>1 Contact Form</li>
                                                <li>Sign up Area (for Newsletter, Offers etc)</li>
                                                <li>Dedicated Account Manager</li>
                                                <li>48 to 72 hours TAT</li>
                                                <li>Domain name (1 Year registeration)</li>
                                                <li>Cloud Hosting (1 year)</li>
                                                <li>SSL Certificate</li>
                                                <li>5 Email ID's</li>
                                                <li>100% Ownership Rights</li>
                                                <li>100% Satisfaction Guarantee</li>
                                                <li>100% Unique Design Guarantee</li>
                                                <li>Mobile responsive will be additional</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`pricing_card`}>
                                        <div className={`p-5 text-center border_bottom`}>
                                            <span>The Combo Package</span>
                                            <p>A combination of multiple services with unlimited revisions. It's all in your budget!</p>
                                            <h3 className='fs-3 fw-semibold'>$1,489/m</h3>
                                            <a href='' className={`button`}>Get Started</a>
                                        </div>
                                        <div className='p-5'>
                                            <ul>
                                                <li>Up to 15 pages website</li>
                                                <li>up to 10 stock images</li>
                                                <li>5 banner designs</li>
                                                <li>1 jQuery slider banner</li>
                                                <li>Custom Design</li>
                                                <li>Complete W3C Certified HTML</li>
                                                <li>Google Map integration</li>
                                                <li>Social Media Integration</li>
                                                <li>CMS/ Admin panel</li>
                                                <li>1 Contact Form</li>
                                                <li>Sign up Area (for Newsletter, Offers etc)</li>
                                                <li>Live Chat Integration</li>
                                                <li>Mobile responsive</li>
                                                <li>Dedicated Account Manager</li>
                                                <li>48 to 72 hours TAT</li>
                                                <li>Domain name (1 Year registeration)</li>
                                                <li>Cloud Hosting (1 year)</li>
                                                <li>SSL Certificate</li>
                                                <li>up to 10 Email ID's</li>
                                                <li>100% Ownership Rights</li>
                                                <li>100% Satisfaction Guarantee</li>
                                                <li>100% Unique Design Guarantee</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`pricing_card`}>
                                        <div className={`p-5 text-center border_bottom`}>
                                            <span>The Jumbo Package</span>
                                            <p>A combination of multiple services with unlimited revisions. It's all in your budget!</p>
                                            <h3 className='fs-3 fw-semibold'>$3,599/m</h3>
                                            <a href='' className={`button`}>Get Started</a>
                                        </div>
                                        <div className='p-5'>
                                            <ul>
                                                <li>Up to 15 pages website</li>
                                                <li>up to 10 stock images</li>
                                                <li>5 banner designs</li>
                                                <li>1 jQuery slider banner</li>
                                                <li>Custom Design</li>
                                                <li>Custom WP or Custom PHP development</li>
                                                <li>Complete W3C Certified HTML</li>
                                                <li>Special Hover Effects</li>
                                                <li>Search bar</li>
                                                <li>CMS/ Admin panel</li>
                                                <li>Contact Form</li>
                                                <li>Sign up Area (for Newsletter, Offers etc)</li>
                                                <li>Live Chat Integration</li>
                                                <li>Payment Integration (optional)</li>
                                                <li>Google Map integration</li>
                                                <li>Social Media Integration</li>
                                                <li>Online appointment/ scheduling integration</li>
                                                <li>Multi Lingual</li>
                                                <li>Facebook Pixel Installation</li>
                                                <li>Google Analytics Integration</li>
                                                <li>Complete Deployment</li>
                                                <li>Mobile responsive</li>
                                                <li>Dedicated Account Manager</li>
                                                <li>48 to 72 hours TAT</li>
                                                <li>Domain name (1 Year registeration)</li>
                                                <li>Cloud Hosting (1 year)</li>
                                                <li>SSL Certificate</li>
                                                <li>up to 15 Email ID's</li>
                                                <li>100% Ownership Rights</li>
                                                <li>100% Satisfaction Guarantee</li>
                                                <li>100% Unique Design Guarantee</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default WebPackages;