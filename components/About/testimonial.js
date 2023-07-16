import React, { useState, useRef, useEffect } from 'react'
import styles from '@/styles/About.module.scss'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import { Col, Container, Row } from 'reactstrap'
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



const Testimonial = () => {
    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();

    const responsive = {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }


    return (
        <section className={`${styles.testimonials}`}>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='col-md-5 col-12 text-center'>
                        <h2 className='fs-1 mb-5'><span className='d-block text-primary fs-3 mb-3'>TESTIMONIAL </span>What our customers say about us</h2>
                    </Col>

                    <Col className='col-md-12'>
                        <div className="slider-btn-wrap">
                            <button ref={prevElRef}><FaChevronLeft /></button>
                            <button ref={nextElRef}><FaChevronRight /></button>
                        </div>
                        <Swiper
                            loop={true}
                            navigation={{
                                prevEl,
                                nextEl,
                            }}
                            slidesPerView={1}
                            breakpoints={responsive}
                            spaceBetween={16}
                            modules={[Navigation]}
                            className="mySwiper py-4 px-3"
                        >
                            <SwiperSlide>
                                <div className={`${styles.card}`}>
                                    <div className='d-flex align-items-center'>
                                        <div className={`${styles.user_img} me-3`}>
                                            <img src='images/user-1.svg' alt='user image' />
                                        </div>
                                        <div className={`${styles.content}`}>
                                            <h3 className='fs-6 fw-normal'>Ellen Williams</h3>
                                            <span className='d-inline-flex align-items-center'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                        </div>
                                    </div>
                                    <p className='mt-2'>Working with Maze Digital was an extremely wise decision of mine. When they say they will develop my website in a budget-friendly package, they will ensure it happens. Kudos to the team.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${styles.card}`}>
                                    <div className='d-flex align-items-center'>
                                        <div className={`${styles.user_img} me-3`}>
                                            <img src='images/user-2.svg' alt='user image' />
                                        </div>
                                        <div className={`${styles.content}`}>
                                            <h3 className='fs-6 fw-normal'>Dianne Russell</h3>
                                            <span className='d-inline-flex align-items-center'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                        </div>
                                    </div>
                                    <p className='mt-2'>I approached Maze Digital to design my UI/UX for the application I’ve been working on. I was really happy to see the results. </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${styles.card}`}>
                                    <div className='d-flex align-items-center'>
                                        <div className={`${styles.user_img} me-3`}>
                                            <img src='images/user-3.svg' alt='user image' />
                                        </div>
                                        <div className={`${styles.content}`}>
                                            <h3 className='fs-6 fw-normal'>Devon Lane</h3>
                                            <span className='d-inline-flex align-items-center'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                        </div>
                                    </div>
                                    <p className='mt-2'>Hola! They did suit my pocket. The packages are way too affordable for the quality services they provide.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial;