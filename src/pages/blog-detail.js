import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google';
import { Col, Container, Row } from 'reactstrap';
import styles from '@/styles/Blog-detail.module.scss';
import ReadsCard from 'components/Blogs/ReadsCard';
import { AiOutlineClockCircle } from 'react-icons/ai';
import RelatedBlog from 'components/Blogs/RelatedBlog';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


const DynamicHeader = dynamic(() => import('components/Header/Header'), {
    ssr: false,
})
const DynamicFooter = dynamic(() => import('components/Footer/Footer'), {
    ssr: false,
})


const Blogs = () => {
    return (
        <>
            <Head>
                <title>Leverage Your Business's Potential with Maze Digital Today!</title>
                <meta name="description" content="We deliver quality UI/UX designs, branding services, logo designing services, e-commerce, website, and web app development services, exclusively tailored for you." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} blog-detail`}>
                <DynamicHeader />

                <section className={`${styles.banner}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-12 col-12'>
                                <h2 className='fs-1 fw-semibold mb-3'>15 Essential UI Design Tips and Best Practices for Creating a Good User Interface</h2>
                                <p>by Joanna Wellick <span><AiOutlineClockCircle /> 2 minute read</span></p>
                                <figure>
                                    <img src='images/blog-banner.jpg' className={`w-100`} />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.blogs_container}>
                    <Container>
                        <Row className='justify-content-between mt-5'>
                            <Col className='col-md-7 col-12'>
                                <div>
                                    <p>User interfaces are the touchpoints that connect businesses and users in the online world. They are the gateway to online products and services. Everything we read, watch, or buy online is accessible via a UI. That's why building user interfaces is an important design task.</p>
                                    <p>In this article, we'll give 15 UI design tips that will help you build better interfaces. We'll also explain how to use Maze Digital to build an outstanding UI. Maze Digital is our web-based React UI builder for rapid low code UI development. Stay tuned to learn more, or sign up now to start creating stunning UIs.</p>
                                    <p>Before we list our UI design tips and best practices, let's explain why UI design is critical to your online business.</p>
                                </div>

                                <div className='mb-5'>
                                    <h2 className='fs-1 fw-semibold mt-5 mb-3'>Why is user-friendly UI design essential for good UX?</h2>
                                    <figure className='mb-4'>
                                        <img src='images/blog-details.jpg' className={`w-100`} />
                                    </figure>

                                    <p>Using a website or app is a cognitive process. Users must put effort into perceiving or completing a task – the higher the effort, the lower the satisfaction from using the product.</p>
                                    <p>User-friendly interface elements reduce the required effort and allow users to complete their tasks faster. Good UI design makes users feel good by facilitating smooth interactions with the interface. User-friendly interfaces eliminate friction points and improve overall user satisfaction.</p>
                                    <p>Users don't care about the design. They care about their satisfaction when using websites and apps. Their happiness depends on the reason for visiting and the expected results. Therefore good graphical user interfaces are:</p>
                                    <ol className='p-0 mb-3'>
                                        <li>Subtle and focused on frictionless interaction</li>
                                        <li>Empowering and facilitating task completion</li>
                                        <li>Aligned with the brand values and appealing to user emotions</li>
                                    </ol>
                                    <p>User interfaces should guide the users through content and task flows seamlessly. An excellent user interface eliminates unnecessary components and has a strong focus on crucial tasks.</p>
                                </div>

                                <div className='mb-5'>
                                    <h2 className='fs-1 fw-semibold mt-5 mb-3'>1. Conduct user research and know who you’re designing for</h2>

                                    <p>Using a website or app is a cognitive process. Users must put effort into perceiving or completing a task – the higher the effort, the lower the satisfaction from using the product.</p>
                                    <p>User-friendly interface elements reduce the required effort and allow users to complete their tasks faster. Good UI design makes users feel good by facilitating smooth interactions with the interface. User-friendly interfaces eliminate friction points and improve overall user satisfaction.</p>
                                    <p>Users don't care about the design. They care about their satisfaction when using websites and apps. Their happiness depends on the reason for visiting and the expected results. Therefore good graphical user interfaces are:</p>
                                    <ol className='p-0 mb-3'>
                                        <li>Subtle and focused on frictionless interaction</li>
                                        <li>Empowering and facilitating task completion</li>
                                        <li>Aligned with the brand values and appealing to user emotions</li>
                                    </ol>
                                    <p>User interfaces should guide the users through content and task flows seamlessly. An excellent user interface eliminates unnecessary components and has a strong focus on crucial tasks.</p>
                                </div>


                                <div className='mb-5'>
                                    <h2 className='fs-1 fw-semibold mt-5 mb-3'>2. Organize and prioritize the information</h2>

                                    <p>Using a website or app is a cognitive process. Users must put effort into perceiving or completing a task – the higher the effort, the lower the satisfaction from using the product.</p>
                                    <p>User-friendly interface elements reduce the required effort and allow users to complete their tasks faster. Good UI design makes users feel good by facilitating smooth interactions with the interface. User-friendly interfaces eliminate friction points and improve overall user satisfaction.</p>
                                    <p>Users don't care about the design. They care about their satisfaction when using websites and apps. Their happiness depends on the reason for visiting and the expected results. Therefore good graphical user interfaces are:</p>
                                    <ol className='p-0 mb-3'>
                                        <li>Subtle and focused on frictionless interaction</li>
                                        <li>Empowering and facilitating task completion</li>
                                        <li>Aligned with the brand values and appealing to user emotions</li>
                                    </ol>
                                    <p>User interfaces should guide the users through content and task flows seamlessly. An excellent user interface eliminates unnecessary components and has a strong focus on crucial tasks.</p>
                                </div>
                            </Col>


                            <Col className='col-md-4 col-12'>
                                <div className={styles.maze_blog}>
                                    <div className={styles.content}>
                                        <img src='images/logo.svg' alt='logo' />
                                        <h3 className='fs-6 fw-semibold text-white mt-3 mb-2'>Create, Code & Publish</h3>
                                        <p className='fs-7 text-white mb-3'>Ship stores, websites and product prototypes faster than ever.</p>
                                        <a href='/' className={`btn-style ${styles.btn_style}`}>Get Started</a>
                                    </div>
                                    <figure className='w-100'>
                                        <img src='images/bg-img.svg' alt='image' className='w-100' />
                                    </figure>
                                </div>

                                <h3 className='fs-4 fw-semibold mb-3'>Suggested Reads</h3>
                                {[1, 2, 3, 4, 5, 6].map((index) =>
                                    <ReadsCard imageUrl={index} />
                                )}
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section>
                    <Container>
                        <Row>
                            <Col className='col-12 text-center'>
                                <h2 className='fs-1 fw-semibold mb-3'>Related Blogs</h2>
                            </Col>
                            {[1, 2, 3].map((index) =>
                                <Col className='col-lg-4 col-md-4 col-12'>
                                    <RelatedBlog imageUrl={index} />
                                </Col>
                            )}
                        </Row>
                    </Container>
                </section>
                <section className='cta-section'>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-8 text-center'>
                                <p className='text-white text-uppercase fs-3 mb-4'>READY TO START?</p>
                                <h2 className='text-white mb-3'>Speak to an expert today about how Maze can ignite your vision.</h2>
                                <Link href='/contact' className='btn-style mt-3'>Let's Connect</Link>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <DynamicFooter />
            </main>
        </>
    )
}

export default Blogs