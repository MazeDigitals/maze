import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from '@/styles/Home.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useSwiperRef from './useSwiperRef';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Scrollbars from 'react-custom-scrollbars';



function ECommercePackages() {
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
                                            <h3 className='fs-3 fw-semibold'>$925/m</h3>
                                            <a href='' className={`button`}>Get Started</a>
                                        </div>
                                        <div className='p-5'>
                                            <Scrollbars style={{ height: 120 }}>
                                                <ul>
                                                    <li>up to 100 products</li>
                                                    <li>Content Managment System WP</li>
                                                    <li>Mini shopping cart integration</li>
                                                    <li>Woocommerce integration</li>
                                                    <li>Payment module integration</li>
                                                    <li>Easy product search</li>
                                                    <li>Product review</li>
                                                    <li>Mobile responsive will be additional</li>
                                                    <li>Domain name (1 Year registeration)</li>
                                                    <li>Cloud Hosting (1 year)</li>
                                                    <li>SSL Certificate</li>
                                                    <li>2 Email ID's</li>
                                                    <li>100% Ownership Rights</li>
                                                    <li>100% Satisfaction Guarantee</li>
                                                    <li>100% Unique Design Guarantee</li>
                                                </ul>
                                            </Scrollbars>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`pricing_card`}>
                                        <div className={`p-5 text-center border_bottom`}>
                                            <span>The Ultimate package</span>
                                            <p>The Ultimate package includes basic and customized services suited to your needs.</p>
                                            <h3 className='fs-3 fw-semibold'>$1,425/m</h3>
                                            <a href='' className={`button`}>Get Started</a>
                                        </div>
                                        <div className='p-5'>
                                            <Scrollbars style={{ height: 120 }}>
                                                <ul>
                                                    <li>Up to 500 products</li>
                                                    <li>Custom Design</li>
                                                    <li>Content Managment System</li>
                                                    <li>Custom WP or PHP development</li>
                                                    <li>Mobile responsive</li>
                                                    <li>Full shopping cart integration</li>
                                                    <li>Payment module integration</li>
                                                    <li>Easy product search</li>
                                                    <li>Product review</li>
                                                    <li>5 Promotional banner</li>
                                                    <li>Contact Form</li>
                                                    <li>Social Media Integration</li>
                                                    <li>Sign up Area (for Newsletter, Offers etc)</li>
                                                    <li>Dedicated Account Manager</li>
                                                    <li>Domain name (1 Year registeration)</li>
                                                    <li>Cloud Hosting (1 year)</li>
                                                    <li>SSL Certificate</li>
                                                    <li>5 Email ID's</li>
                                                    <li>100% Ownership Rights</li>
                                                    <li>100% Satisfaction Guarantee</li>
                                                    <li>100% Unique Design Guarantee</li>
                                                </ul>
                                            </Scrollbars>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`pricing_card`}>
                                        <div className={`p-5 text-center border_bottom`}>
                                            <span>The Combo Package</span>
                                            <p>A combination of multiple services with unlimited revisions. It's all in your budget!</p>
                                            <h3 className='fs-3 fw-semibold'>$2,425/m</h3>
                                            <a href='' className={`button`}>Get Started</a>
                                        </div>
                                        <div className='p-5'>
                                            <Scrollbars style={{ height: 120 }}>
                                                <ul>
                                                    <li>Up to 1000 products</li>
                                                    <li>Custom Design</li>
                                                    <li>Content Managment System</li>
                                                    <li>Custom WP or PHP development</li>
                                                    <li>Mobile responsive</li>
                                                    <li>Full shopping cart integration</li>
                                                    <li>Payment module integration</li>
                                                    <li>Easy product search</li>
                                                    <li>Product review</li>
                                                    <li>Facenook Pixel Installation</li>
                                                    <li>Live Chat integration</li>
                                                    <li>Google Map Integration</li>
                                                    <li>Featured product showcase</li>
                                                    <li>5 Promotional banner</li>
                                                    <li>Contact Form</li>
                                                    <li>Social Media Integration</li>
                                                    <li>Sign up Area (for Newsletter, Offers etc)</li>
                                                    <li>Dedicated Account Manager</li>
                                                    <li>Domain name (1 Year registeration)</li>
                                                    <li>Cloud Hosting (1 year)</li>
                                                    <li>SSL Certificate</li>
                                                    <li>up to 10 Email ID's</li>
                                                    <li>100% Ownership Rights</li>
                                                    <li>100% Satisfaction Guarantee</li>
                                                    <li>100% Unique Design Guarantee</li>
                                                </ul>
                                            </Scrollbars>
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
                                            <Scrollbars style={{ height: 120 }}>
                                                <ul>
                                                    <li>Up to 1500 products</li>
                                                    <li>Custom Design</li>
                                                    <li>Content Managment System</li>
                                                    <li>Custom WP or PHP development</li>
                                                    <li>Icon Design</li>
                                                    <li>Stationary Design (BusinessCard,Letterhead & Envelope)</li>
                                                    <li>Invoice Design, Email Signature</li>
                                                    <li>Product Catalog Design</li>
                                                    <li>Unlimited Categories</li>
                                                    <li>Cutomer Log-in Area</li>
                                                    <li>Multi lingual</li>
                                                    <li>Multi-currency Support</li>
                                                    <li>Crypto Payment integration (Metamask)</li>
                                                    <li>Mobile responsive</li>
                                                    <li>Full shopping cart integration</li>
                                                    <li>Payment module integration</li>
                                                    <li>Easy product search</li>
                                                    <li>Product review</li>
                                                    <li>Facenook Pixel Installation</li>
                                                    <li>Live Chat integration</li>
                                                    <li>Google Map Integration</li>
                                                    <li>Featured product showcase</li>
                                                    <li>5 Promotional banner</li>
                                                    <li>Contact Form</li>
                                                    <li>Social Media Integration</li>
                                                    <li>Sign up Area (for Newsletter, Offers etc)</li>
                                                    <li>Dedicated Account Manager</li>
                                                    <li>Domain name (1 Year registeration)</li>
                                                    <li>Cloud Hosting (1 year)</li>
                                                    <li>SSL Certificate</li>
                                                    <li>up to 10 Email ID's</li>
                                                    <li>100% Ownership Rights</li>
                                                    <li>100% Satisfaction Guarantee</li>
                                                    <li>100% Unique Design Guarantee</li>
                                                </ul>
                                            </Scrollbars>
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

export default ECommercePackages;