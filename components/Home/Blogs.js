import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from '@/styles/Home.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

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

function Blogs() {
    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();

    const responsive = {
        768: {
            slidesPerView: 3.125,
            centeredSlides: true
        },
        1024: {
            slidesPerView: 4.25,
            centeredSlides: true
        },
    }


    return (
        <section className={`${styles.blogs_section}`}>
            <Container>
                <Row>
                    <Col className='col-md-6 col-12 text-center text-md-start'>
                        <h3 className='fw-semibold mb-3'>BLOGS</h3>
                        <p className='fw-normal'>It's important to know the process! Our blog bank is here to help you understand how 
                        we and the digital world operate. The positive aspect is that our prices are low.</p>
                    </Col>
                    <Col className='col-md-6 col-12 text-end'>
                        <a className='text-end'>View all</a>
                        <div className={`${styles.button_wrap}`}>
                            <button ref={prevElRef}><img src='/images/arrow-left.svg' alt="icon" /></button>
                            <button ref={nextElRef}><img src='/images/arrow-right.svg' alt="icon" /></button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='px-0'>
                <Swiper
                    loop={true}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={responsive}
                    slidesPerView={1.25}
                    spaceBetween={16}
                    modules={[Autoplay, Navigation]}
                    className={`${styles.swiper_cont} mySwiper py-md-4 px-md-3`}
                >
                    <SwiperSlide>
                        <div className={`${styles.blog_card}`}>
                            <figure><img src='/images/blog-2.svg' alt="icon" /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>Product Design</span>Mang Oleh - Brand Identity</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.blog_card}`}>
                            <figure><img src='/images/blog-3.svg' alt="icon" /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>Web Development</span>Taste, a Like you Becomean Iron Man</h3>
                                <p>Collaboratively administrate empowered markets via plug-and-play networks</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.blog_card}`}>
                            <figure><img src='/images/blog-4.svg' alt="icon" /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>Web Design</span>Odading is The Best Food from Mang Oleh</h3>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.blog_card}`}>
                            <figure><img src='/images/blog-5.svg' alt="icon" /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>Software Bug</span>Where is the belt? don't Not bring it sis</h3>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.blog_card}`}>
                            <figure><img src='/images/blog-6.svg' alt="icon" /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>UI/UX</span>Don't Read <br />The rules</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in cididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    )
}

export default Blogs