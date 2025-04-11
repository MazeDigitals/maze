import Head from 'next/head';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google';
import { Col, Container, Row } from 'reactstrap';
import styles from '@/styles/performance-marketing-services.module.scss';
import CallToAction from 'components/About/CallToAction';
import ContactModal from 'components/Modal/ContactModal';


const inter = Inter({ subsets: ['latin'] })

const DynamicHeader = dynamic(() => import('components/Header/Header'), {
    ssr: false,
})
const DynamicFooter = dynamic(() => import('components/Footer/Footer'), {
    ssr: false,
})

const DynamicWebPackages = dynamic(() => import('components/Home/WebPackages'), {
    ssr: false,
})


const WebDevelopment = () => {
    const [isContactModalOpen, setContactModalOpen] = useState(false);

    const handleGetStartedClick = () => {
        setContactModalOpen(!isContactModalOpen); // Toggle the state
    };

    return (
        <>
            <Head>
                <title>Performance Marketing Services | Maze Digitals</title>
                <meta name="description" content="Discover performance marketing services from Maze Digitals – including paid social media, PPC, and SEO – to drive real business results." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <DynamicHeader />

                <ContactModal isOpen={isContactModalOpen} toggle={handleGetStartedClick} />


                <section className={styles.banner}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h1 className='text-white'>Precision-Driven Performance Marketing Services to Maximize your business ROI</h1>
                                <p className='text-white'>Whether it’s on search engines or social media, our data-driven marketing ensures your brand reaches the correct audience at the correct time</p>
                                <button onClick={handleGetStartedClick} className={`btn-style text-uppercase ${styles.btn_style}`}>Let’s Get Started | Book a Free Strategy Call</button>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/web-img.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                    <img src="images/product-bg.png" alt='' />
                </section>

                <section className={styles.attract_sec}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h2 className='fs-1'>
                                    We specialize in data-backed strategies like <span>PPC management</span>, SEO, and paid social mediacampaigns to maximize ROI.</h2>
                            </Col>
                            <Col className='col-lg-5 col-md-6 col-12'>
                                <p className='text-white'>Performance marketing is a results-oriented digital strategy focused on driving measurable actions—like clicks, leads, and conversions—rather than just impressions.</p>
                                <p className='text-white'>By blending data
                                    analytics with creative execution, we build full-funnel campaigns that track performance at every
                                    stage, ensuring your marketing spend directly fuels business growth.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={`${styles.success_section} ${styles.bg_color}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-10 col-12 justify-content-center'>

                                <Row style={{ justifyContent: 'center' }}>
                                    <div className='col-md-12 text-center mb-2'>
                                        <h1>Services</h1>
                                        <p>Include a couple of testimonials, like a review from TrustPilot or a review from our Google Business Profile.</p>
                                    </div>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <p className='fs-6 fw-semibold m-0'>ROI-Driven Strategy</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <p className='fs-6 fw-semibold m-0'>Full-Funnel Campaigns</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <p className='fs-6 fw-semibold m-0'>Real-Time Optimization</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <p className='fs-6 fw-semibold m-0'>Cross-Platform Expertise</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <p className='fs-6 fw-semibold m-0'>Transparent Reporting</p>
                                        </div>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Container>
                </section>


                {/*  <section className={styles.ui_ux}>
                   <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h2>Achieve your goals with our
                                    <span className='d-block'>Web Development Services</span></h2>
                                <h3 className='fs-6 my-3'>Kick start with Maze Digital Today!</h3>
                                <p className='fs-7'> Sign up with Maze Digital to achieve your goals with our <strong>web development services</strong>.
                                    The team at Maze Digital ensures that an <strong>SEO-friendly website</strong> is created to reach more customers.
                                    We make a <strong>user-friendly design interface</strong> that is easy to navigate. Moreover, we promise to build
                                    an exceptional yet functional <strong>website design</strong>, boosting sales and revenue. The mobile-friendly and responsive
                                    website will ensure the <strong>web development services</strong> are up to the mark.</p>
                                <button onClick={handleGetStartedClick} className='btn-style text-uppercase mt-3'>Get Started</button>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/web-services.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                    </Container> 
                    
                </section>*/}

                {/* 
                <section className={styles.optimize_product}>
                    <Container>
                        <Row>
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <p className={styles.TitlePara}>Paid Social Media Marketing</p>
                                    <h3 className='fs-6 fw-bold mb-2'>Captivating Creatives that lead to High-Converting Campaigns</h3>
                                    <p className='fs-7'>At Maze Digital, we don’t just run ads — we craft thumb-stopping creative experiences that
                                        make your audience pause, engage, and convert. From bold visual storytelling to precision
                                        targeting, we design paid social media marketing campaigns that turn casual scrollers into loyal
                                        customers of your business.</p>

                                    <p className='fs-7'>Whether it's Facebook ads, Instagram ads, TikTok ads, or LinkedIn ads, our performance
                                        marketing specialists build customized strategies for every platform — optimized for brand
                                        awareness, lead generation, and retargeting. Through audience segmentation, A/B testing, and
                                        creative iteration, we ensure your message lands with the right people at the right time.
                                    </p>

                                    <ul>
                                        <li>Scroll-stopping visuals tailored for each platform’s native behavior</li>
                                        <li>Hyper-targeted audience building using behavioral & interest-based data</li>
                                        <li>Retargeting flows that re-engage users across the customer journey</li>
                                        <li>Campaigns aligned with your business goals — from awareness to conversion</li>
                                    </ul>


                                    <Row>
                                        <Col className='col-md-6 col-6'>
                                            <div className={`${styles.card} text-center bg-white`}>
                                                <p className='fs-6 fw-semibold m-0'>Custom Creative Strategy</p>
                                            </div>
                                        </Col>
                                        <Col className='col-md-6 col-6'>
                                            <div className={`${styles.card} text-center bg-white`}>
                                                <p className='fs-6 fw-semibold m-0'>Precision Audience Targeting</p>
                                            </div>
                                        </Col>
                                        <Col className='col-md-6 col-6'>
                                            <div className={`${styles.card} text-center bg-white`}>
                                                <p className='fs-6 fw-semibold m-0'>Retargeting & Lookalike Campaigns</p>
                                            </div>
                                        </Col>
                                        <Col className='col-md-6 col-6'>
                                            <div className={`${styles.card} text-center bg-white`}>
                                                <p className='fs-6 fw-semibold m-0'>A/B Testing & Optimization</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <p className={styles.TitlePara}>PPC Management Services</p>
                                    <h3 className='fs-6 fw-bold mb-2'>Intent-Driven Ads That Consistently Deliver Measurable ROI</h3>
                                    <p className='fs-7'>At Maze Digital, our pay-per-click advertising strategies are built to capture demand at the exact
                                        moment when people are searching for what your business offers. Our team of Google Ads
                                        specialists create and manage high-performing PPC campaigns across Google Ads and Bing,
                                        with a laser focus on quality score, keyword intent, and conversion rate optimization.</p>

                                    <p className='fs-7'>We don’t just bid on keywords — we build full-funnel campaigns that align with user behavior
                                        and buyer intent. Whether it’s high-converting search ads, eye-catching display banners, or
                                        precision remarketing sequences, every campaign is engineered for consistent performance.
                                    </p>

                                    <ul>
                                        <li>In-depth keyword research & match-type targeting</li>
                                        <li>Ad copywriting tailored to user search intent</li>
                                        <li>Landing page alignment to boost Quality Score & Conversion Rate</li>
                                        <li>Smart bidding strategies that maximize ROI</li>
                                        <li>Granular audience segmentation for remarketing & customer retention</li>
                                    </ul>


                                    <Row>
                                        <Col className='col-md-12 col-6'>
                                            <h3 className='fs-6 fw-bold mb-2'>Search Ads</h3>
                                            <p className=' mt-1'>Show up at the top when your ideal customers are actively searching.</p>
                                        </Col>
                                        <Col className='col-md-12 col-6'>
                                            <h3 className='fs-6 fw-bold mb-2'>Display Ads</h3>
                                            <p className='mt-1'>Visually engage users across relevant websites and apps.</p>
                                        </Col>
                                        <Col className='col-md-12 col-6'>
                                            <h3 className='fs-6 fw-bold mb-2'>Remarketing</h3>
                                            <p className='mt-1'>Reconnect with users who’ve interacted with your brand and bring them
                                                back to convert.</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <p className={styles.TitlePara}>SEO services</p>
                                    <h3 className='fs-6 fw-bold mb-2'>Long-Term Growth Through Strategic Organic Marketing</h3>
                                    <p className='fs-7'>At Maze Digital, our SEO services are designed to drive sustainable, long-term visibility for your
                                        brand. As a results-driven search engine optimization agency, we combine data, strategy, and
                                        content to help you climb the search rankings — and stay there.</p>

                                    <p className='fs-7'>From in-depth keyword research and technical SEO audits to content optimization and
                                        link-building strategies, we take a holistic approach to organic marketing. Every element is
                                        crafted to improve search visibility, increase website traffic, and turn organic clicks into qualified
                                        leads.
                                    </p>
                                    <p className='fs-7'>Whether you're a growing brand or an established business, our search engine optimization
                                        agency helps you dominate the SERPs and unlock the full potential of organic marketing.
                                    </p>

                                    <ul>
                                        <li>Comprehensive on-page optimization (titles, meta tags, content structure)</li>
                                        <li>Technical SEO audits and site speed improvements</li>
                                        <li>Content strategy & optimization based on search intent</li>
                                        <li>High-authority backlink acquisition and outreach</li>
                                        <li>Local SEO and schema markup implementation</li>
                                        <li>Transparent reporting and performance tracking</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section> */}


                <section className={styles.ui_ux}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h2>Paid Social Media Marketing</h2>
                                <h3 className='fs-6 my-3'>Captivating Creatives that lead to High-Converting Campaigns</h3>
                                <p className='fs-7'>At Maze Digital, we don’t just run ads — we craft thumb-stopping creative experiences that make your audience pause, engage, and convert. From bold visual storytelling to precision targeting, we design paid social media marketing campaigns that turn casual scrollers into loyal customers of your business.</p>
                                <p className='fs-7'>Whether it's Facebook ads, Instagram ads, TikTok ads, or LinkedIn ads, our performance marketing specialists build customized strategies for every platform — optimized for brand awareness, lead generation, and retargeting. Through audience segmentation, A/B testing, and creative iteration, we ensure your message lands with the right people at the right time.</p>
                                {/* <button onClick={handleGetStartedClick} className='btn-style text-uppercase mt-3'>Get Started</button> */}
                                <ul>
                                    <li>Scroll-stopping visuals tailored for each platform’s native behavior</li>
                                    <li>Hyper-targeted audience building using behavioral & interest-based data</li>
                                    <li>Retargeting flows that re-engage users across the customer journey</li>
                                    <li>Campaigns aligned with your business goals — from awareness to conversion</li>
                                </ul>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/perfomance-two-removebg-preview.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={`${styles.success_section} ${styles.bg_color}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-12 col-12 justify-content-center'>
                                <Row style={{ justifyContent: 'center' }}>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <p className='fs-7 fw-semibold m-0'>Custom Creative Strategy</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <p className='fs-7 fw-semibold m-0'>Precision Audience Targeting</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <p className='fs-7 fw-semibold m-0'>Retargeting & Lookalike Campaigns</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <p className='fs-7 fw-semibold m-0'>A/B Testing & Optimization</p>
                                        </div>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={styles.ui_ux}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/perfomance-three-removebg-preview.png" alt='' />
                                </figure>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h2>PPC Management Services</h2>
                                <h3 className='fs-6 my-3'>Intent-Driven Ads That Consistently Deliver Measurable ROI</h3>
                                <p className='fs-7'>At Maze Digital, our pay-per-click advertising strategies are built to capture demand at the exact moment when people are searching for what your business offers. Our team of Google Ads specialists create and manage high-performing PPC campaigns across Google Ads and Bing, with a laser focus on quality score, keyword intent, and conversion rate optimization.</p>
                                <p className='fs-7'>We don’t just bid on keywords — we build full-funnel campaigns that align with user behavior and buyer intent. Whether it’s high-converting search ads, eye-catching display banners, or precision remarketing sequences, every campaign is engineered for consistent performance.</p>
                                {/* <button onClick={handleGetStartedClick} className='btn-style text-uppercase mt-3'>Get Started</button> */}
                                <ul>
                                    <li>In-depth keyword research & match-type targeting</li>
                                    <li>Ad copywriting tailored to user search intent</li>
                                    <li>Landing page alignment to boost Quality Score & Conversion Rate</li>
                                    <li>Smart bidding strategies that maximize ROI</li>
                                    <li>Granular audience segmentation for remarketing & customer retention</li>
                                </ul>
                            </Col>

                        </Row>
                    </Container>
                </section>


                <section className={`${styles.success_section} ${styles.bg_color}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-10 col-12 justify-content-center'>
                                <Row style={{ justifyContent: 'center' }}>
                                    <Col className='col-md-4 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <h3 className='fs-4 fw-semibold m-0'>Search Ads</h3>
                                            <p className='fs-7 fw-semibold m-0'>Show up at the top when your ideal customers are actively searching.</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-4 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <h3 className='fs-4 fw-semibold m-0'>Display Ads</h3>
                                            <p className='fs-7 fw-semibold m-0'>Visually engage users across relevant websites and apps.</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-4 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <h3 className='fs-4 fw-semibold m-0'>Remarketing</h3>
                                            <p className='fs-7 fw-semibold m-0'>Reconnect with users who’ve interacted with your brand and bring them back to convert.</p>
                                        </div>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.ui_ux}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h2>SEO services</h2>
                                <h3 className='fs-6 my-3'>Long-Term Growth Through Strategic Organic Marketing</h3>
                                <p className='fs-7'>At Maze Digital, our SEO services are designed to drive sustainable, long-term visibility for your brand. As a results-driven search engine optimization agency, we combine data, strategy, and content to help you climb the search rankings — and stay there.</p>
                                <p className='fs-7'>From in-depth keyword research and technical SEO audits to content optimization and link-building strategies, we take a holistic approach to organic marketing. Every element is crafted to improve search visibility, increase website traffic, and turn organic clicks into qualified leads.</p>
                                <p className='fs-7'>Whether you're a growing brand or an established business, our search engine optimization agency helps you dominate the SERPs and unlock the full potential of organic marketing.</p>
                                {/* <button onClick={handleGetStartedClick} className='btn-style text-uppercase mt-3'>Get Started</button> */}
                                <ul>
                                    <li>Comprehensive on-page optimization (titles, meta tags, content structure)</li>
                                    <li>Technical SEO audits and site speed improvements</li>
                                    <li>Content strategy & optimization based on search intent</li>
                                    <li>High-authority backlink acquisition and outreach</li>
                                    <li>Local SEO and schema markup implementation</li>
                                    <li>Transparent reporting and performance tracking</li>
                                </ul>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/perfomance-one-removebg-preview.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* <section className={styles.design_process}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-7 col-12 text-center mb-5'>
                                <h2 className='fw-semibold mb-3'>Take advantage of our proven <span className='text-primary'>Web development process</span></h2>
                                <p className=''>Amet minim mollit   dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </Col>
                            <Col className='col-12'>
                                <ul>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Discuss your ideas</h3>
                                        <p className='fs-7 fw-normal'>Get in touch with our experts to understand your technology needs, project goals & team dynamics.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Choose a Technology</h3>
                                        <p className='fs-7 fw-normal'>Get in touch with our experts to understand your technology needs, project goals & team dynamics.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Get Started with Design</h3>
                                        <p className='fs-7 fw-normal'>Get in touch with our experts to understand your technology needs, project goals & team dynamics.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Development Phase</h3>
                                        <p className='fs-7 fw-normal'>Get in touch with our experts to understand your technology needs, project goals & team dynamics.</p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={`${styles.success_section} ${styles.bg_color}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-10 col-12'>
                                <Row>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <h3 className='fs-1 mfw-semibold b-1'>350+</h3>
                                            <p className='fs-6 fw-semibold m-0'>Project Completed</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <h3 className='fs-1 fw-semibold mb-1'>23+</h3>
                                            <p className='fs-6 fw-semibold m-0'>Professional Teams</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <h3 className='fs-1 fw-semibold mb-1'>12+</h3>
                                            <p className='fs-6 fw-semibold m-0'>Years Experience</p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-3 col-6'>
                                        <div className={`${styles.card} text-center bg-white`}>
                                            <h3 className='fs-1 mfw-semibold b-1'>350+</h3>
                                            <p className='fs-6 fw-semibold m-0'>Project Completed</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={`${styles.pricing_section}`} id="pricing">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-8 col-12 text-center mb-5'>
                                <h2 className='fs-2'>PRICING</h2>
                                <p>Our pricing strategy is designed to meet the affordability of your pocket. Check out the most budget-friendly packages designed for each service.</p>
                            </Col>
                        </Row>
                    </Container>
                    <DynamicWebPackages />
                </section>

                <section className={`${styles.custom_pack} ${styles.product}`}>
                    <Container>
                        <Row className='justify-content-between align-items-center'>
                            <Col className='col-md-6 col-12'>
                                <h2 className='fs-1 text-white fw-semibold mb-3'>Prices Start from $390 ONLY!</h2>
                                <p className='fs-6 text-white'>All plans include unlimited requests, unlimited revisions, and source files.</p>
                                <a href='/' className='btn-style mt-4'>Get a Quote</a>
                            </Col>
                            <Col className='col-md-5 col-12'>
                                <h4 className='fs-6 text-white fw-semibold mb-3'>Package includes</h4>
                                <ul>
                                    <li>Customized website development tailored to your unique business needs.</li>
                                    <li>Intuitive and user-friendly interface for seamless user experience.</li>
                                    <li>Scalable solutions to accommodate your business's future growth goals.</li>
                                    <li>Quality assurance and testing to ensure a flawless website launch.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section> */}

                <CallToAction heading="Ready to grow your business with performance marketing?" desc="Let us build a performance strategy tailored to your goals" />
                <DynamicFooter />
            </main >
        </>
    )
}

export default WebDevelopment