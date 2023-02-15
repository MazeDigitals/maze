import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './awards.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Awards = () => {

    const responsive = {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }


    return (
        <section className={`${styles.awards_section}`}>
            <Container>
                <Row>
                    <Col className='col-md-12'>
                        <h2 className='mb-5 text-center'>Awards & Recognition</h2>

                        <Swiper
                            loop={true}
                            slidesPerView={1}
                            spaceBetween={16}
                            pagination={true}
                            breakpoints={responsive}
                            modules={[Pagination]}
                            className="mySwiper py-4 px-3"
                        >
                            <SwiperSlide>
                                <div className={`${styles.award_card}`}>
                                    <img src='images/award.svg' alt='award' />
                                    <h3 className='fs-5 mt-3 fw-semibold'>Top Mobile App Development Companies in Florida</h3>
                                    <p>Recognized as the top company providing affordable design & development services in 2022.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${styles.award_card}`}>
                                    <img src='images/award.svg' alt='award' />
                                    <h3 className='fs-5 mt-3 fw-semibold'>Top Mobile App Development Companies in Florida</h3>
                                    <p>Recognized as the top website development company in 2022 Florida.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${styles.award_card}`}>
                                    <img src='images/award.svg' alt='award' />
                                    <h3 className='fs-5 mt-3 fw-semibold'>Top Mobile App Development Companies in Florida</h3>
                                    <p>Recognized as one of the best UI/UX-designed wireframes for a company operating in the Middle East.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`${styles.award_card}`}>
                                    <img src='images/award.svg' alt='award' />
                                    <h3 className='fs-5 mt-3 fw-semibold'>Top Mobile App Development Companies in Florida</h3>
                                    <p>Recognized as the top logo-designing company in Canada in 2022.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Awards