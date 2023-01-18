import React, { useState, useRef, useEffect } from 'react'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import styles from '@/styles/Home.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


const useSwiperRef = () => {
    const [wrapper, setWrapper] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        setWrapper(ref.current);
    }, []);

    return [
        wrapper,
        ref
    ]
};


function Pricing() {
    const [activeTab, setActiveTab] = useState('1');
    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();


    return (
        <>
            {/* PRICING SECTION */}
            <section className={`${styles.pricing_section}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col className='col-md-4 text-center mb-4'>
                            <h4 className='fw-semibold mb-2'>PRICING</h4>
                            <p className='fw-normal'>All plans include unlimited requests, unlimited revisions, and source files.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-12'>
                            <Nav className={`justify-content-center border-0 ${styles.tab_cont}`} tabs>
                                <NavItem className={`${styles.tab_item}`}>
                                    <NavLink className={`${styles.tab_link} ${activeTab == '1' ? styles.active : ''}`} onClick={() => setActiveTab('1')}>Ecommerce</NavLink>
                                </NavItem>
                                <NavItem className={`${styles.tab_item}`}>
                                    <NavLink className={`${styles.tab_link} ${activeTab == '2' ? styles.active : ''}`} onClick={() => setActiveTab('2')}>Web Development</NavLink>
                                </NavItem>
                                <NavItem className={`${styles.tab_item}`}>
                                    <NavLink className={`${styles.tab_link} ${activeTab == '3' ? styles.active : ''}`} onClick={() => setActiveTab('3')}>Design Service</NavLink>
                                </NavItem>
                                <NavItem className={`${styles.tab_item}`}>
                                    <NavLink className={`${styles.tab_link} ${activeTab == '4' ? styles.active : ''}`} onClick={() => setActiveTab('4')}>UI/UX Design</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
                <div className='position-relative'>
                    <div className={`${styles.button_wrap}`}>
                        <button ref={prevElRef}><img src={process.env.APP_URL + '/images/arrow-left.svg'} alt="icon" /></button>
                        <button ref={nextElRef}><img src={process.env.APP_URL + '/images/arrow-right.svg'} alt="icon" /></button>
                    </div>
                    <Container>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Swiper
                                    loop={true}
                                    navigation={{
                                        prevEl,
                                        nextEl,
                                    }}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    modules={[Navigation]}
                                    className="mySwiper py-4 px-3"
                                >
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>$3,000/m</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>$6,000/m</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>Combo</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </TabPane>
                            <TabPane tabId="2">
                                <Swiper
                                    loop={true}
                                    navigation={{
                                        prevEl,
                                        nextEl,
                                    }}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    modules={[Navigation]}
                                    className="mySwiper py-4 px-3"
                                >
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>$3,000/m</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>$6,000/m</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>Combo</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </TabPane>
                            <TabPane tabId="3">
                                <Swiper
                                    loop={true}
                                    navigation={{
                                        prevEl,
                                        nextEl,
                                    }}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    modules={[Navigation]}
                                    className="mySwiper py-4 px-3"
                                >
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>$3,000/m</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>$6,000/m</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>Combo</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </TabPane>
                            <TabPane tabId="4">
                                <Swiper
                                    loop={true}
                                    navigation={{
                                        prevEl,
                                        nextEl,
                                    }}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    modules={[Navigation]}
                                    className="mySwiper py-4 px-3"
                                >
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>$3,000/m</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>$6,000/m</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={`${styles.pricing_card}`}>
                                            <div className={`p-5 text-center ${styles.border_bottom}`}>
                                                <span>Lorem Ipsum</span>
                                                <p>Laoreet ullamcorper sed purus risus enim quam tortor, faucibus. Enim</p>
                                                <h3 className='fs-3 fw-semibold'>Combo</h3>
                                                <a href='' className={`${styles.button}`}>Get Started</a>
                                            </div>
                                            <div className='p-5'>
                                                <ul>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </TabPane>
                        </TabContent>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col className='text-center mt-2'>
                            <a href='/' className={`${styles.custom_button}`}>View details</a>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* PRICING SECTION */}
        </>
    )
}

export default Pricing