import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from '@/styles/Home.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';



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
                            <button ref={prevElRef}><img src='/images/arrow-left.svg' height={32} width={32} alt="icon" /></button>
                            <button ref={nextElRef}><img src='/images/arrow-right.svg' height={32} width={32} alt="icon" /></button>
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
                            <figure><Image src='/images/blog-2.svg' alt="icon" className='w-100' height={296} width={296} /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>Product Design</span>Mang Oleh - Brand Identity</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.blog_card}`}>
                            <figure><Image src='/images/blog-3.svg' alt="icon" className='w-100' height={296} width={296} /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>Web Development</span>Taste, a Like you Becomean Iron Man</h3>
                                <p>Collaboratively administrate empowered markets via plug-and-play networks</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.blog_card}`}>
                            <figure><Image src='/images/blog-4.svg' alt="icon" className='w-100' height={296} width={296} /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>Web Design</span>Odading is The Best Food from Mang Oleh</h3>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.blog_card}`}>
                            <figure><Image src='/images/blog-5.svg' alt="icon" className='w-100' height={296} width={296} /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>Software Bug</span>Where is the belt? don't Not bring it sis</h3>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${styles.blog_card}`}>
                            <figure><Image src='/images/blog-6.svg' alt="icon" className='w-100' height={296} width={296} /></figure>
                            <div className={`${styles.content}`}>
                                <h3><span>UI/UX</span> Design: Breaking the Rules</h3>
                                <p>Discover the art of defying conventional design principles and pushing the boundaries of UI/UX. In this insightful article, we explore how innovative designers challenge the norms, creating captivating user experiences that stand out from the crowd. From unconventional layouts to daring color schemes, we delve into real-world examples that inspire you to break free from the traditional rules. Join us on this creative journey as we uncover the secrets behind successful rule-breaking UI/UX designs and learn how to create impactful interfaces that leave a lasting impression.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    )
}

export default Blogs