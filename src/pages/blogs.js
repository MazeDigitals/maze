import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google';
import { Col, Container, Row } from 'reactstrap';
import styles from '@/styles/Blogs.module.scss';
import BlogCard from 'components/Blogs/BlogCard';
import ReadsCard from 'components/Blogs/ReadsCard';
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
            <main className={styles.main}>
                <DynamicHeader />

                <section className={`${styles.banner} text-center`}>
                    <img src='images/blog-bg.svg' className={`${styles.bg_image}`} />
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-8 col-12'>
                                <h1 className='text-white'>Blogs</h1>
                                <p>Leverage agile frameworks to provide a robust <br /> synopsis for high level overviews.</p>
                                <div className={`${styles.search_blog}`}>
                                    <input type="search" placeholder='Search with keyword' />
                                    <button className='btn-style'>Search Blogs</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={`${styles.blogs_container}`}>
                    <Container>
                        <Row className='justify-content-between'>
                            <Col className='col-lg-7 col-12'>
                                <h3 className='fs-4 fw-semibold mb-3'>Trending Posts</h3>

                                {[1, 2, 3, 4, 5].map((index) =>
                                    <BlogCard imageUrl={index} />
                                )}
                            </Col>
                            <Col className='col-lg-4 col-12'>
                                <h3 className='fs-4 fw-semibold mb-3'>Suggested Reads</h3>
                                {[1, 2, 3, 4, 5, 6].map((index) =>
                                    <ReadsCard imageUrl={index} />
                                )}

                                <h3 className='fs-4 fw-semibold mb-3'>Categories</h3>
                                <ul className={`${styles.categories_list}`}>
                                    <li><a href='/'>Design Systems</a></li>
                                    <li><a href='/'>User Experience Mobile</a></li>
                                    <li><a href='/'>R&D</a></li>
                                    <li><a href='/'>Color Theme</a></li>
                                    <li><a href='/'>Typography</a></li>
                                    <li><a href='/'>Info Architecture</a></li>
                                    <li><a href='/'>Websites Hierarchy </a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='cta-section'>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-8 col-md-10 text-center'>
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