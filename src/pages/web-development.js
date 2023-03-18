import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google';
import { Col, Container, Row } from 'reactstrap';
import styles from '@/styles/Product.module.scss';
import CallToAction from 'components/About/CallToAction';


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
    return (
        <>
            <Head>
                <title>Leverage Your Business's Potential with Maze Digital Today!</title>
                <meta name="description" content="We deliver quality UI/UX designs, branding services, logo designing services, e-commerce, website, and web app development services, exclusively tailored for you." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <DynamicHeader />

                <section className={styles.banner}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h1 className='text-white'>Web Development</h1>
                                <p className='text-white'>Web-based projects are the projects of the future. As the best web design company in the USA, we function and deliver optimal performance like a mobile app. The Maze Digital team excels at bringing your concepts to life by engaging users, prioritizing responsive interactions, and considering web app development to be a legacy of web development.</p>
                                <a href='/' className={`btn-style text-uppercase ${styles.btn_style}`}>Get Started</a>
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
                                <h2 className='fs-1'>Attract Your Customers with an <span>Appealing Developed</span> Website</h2>
                            </Col>
                            <Col className='col-lg-5 col-md-6 col-12'>
                                <p className='text-white'>We create custom websites by understanding your business's niche, ensuring that the website is visually appealing, responsive, and easy to navigate with great performance and capacity.</p>
                                <p className='text-white'>With effective front-end, back-end, full-stack, and low-code web development, our designers are keen on providing quality designed and developed websites best suited to your business's needs at affordable rates. </p>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={styles.product_services}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-10 col-md-12 col-12'>
                                <Row className='justify-content-between'>
                                    <Col className='col-lg-7 col-md-8 col-12'>
                                        <h3 className='fs-3 fw-semibold'>Websites</h3>
                                        <p> Websites ensure a business's great impression and your perspective on customers. For a great website design, our skilled team of professionals helps provide a good user experience that allows your visitors to become potential clients just because they can navigate your business's website easily! With great website designs at affordable rates, you can nurture your leads by getting more conversions.</p>

                                        <h3 className='fs-3 fw-semibold'>Ecommerce</h3>
                                        <p>Possessing your e-commerce website helps you identify and understand your customers. Developing an e-commerce website design requires you to include demographics, analyze customer behavior, customer buying journey, UI/UX design, mobile functionality, responsiveness, a great shopping cart design, customer support and contacts, social proof, supportive articles, and so much more. To achieve this, you need a team of highly skilled professionals that can help you develop the website at affordable rates, and where else can you find it other than Maze Digital?</p>

                                        <h3 className='fs-3 fw-semibold'>Web Apllication</h3>
                                        <p>Web applications are known to protect websites and software. Web apps provide a high level of security where multiple web technologies on the market can guarantee that it will be easy to protect the applications. Millions of individuals rely on web apps because they are secure and ensure authenticity. Developing these web apps is what professionals at Maze Digital are skilled at.</p>

                                        <h3 className='fs-3 fw-semibold'>Content Management System</h3>
                                        <p>A fully functional developed content management system is the need of today's businesses. Non-techies, as well as techies, can now publish content and engage their potential customers without the need to maintain a website.</p>
                                        <p>Setting up a content management system is important to keep all your content, offering a clear structure and helping your customers find exactly what they’re looking for. </p>

                                    </Col>
                                    <Col className='col-lg-4 col-md-4 col-12'>
                                        <div className={styles.card}>
                                            <h4 className='fs-4 fw-semibold mb-4'>Content</h4>
                                            <ul className='m-0 p-0 list-unstyled'>
                                                <li><a href='/'>Product Design Service</a></li>
                                                <li><a href='/'>UX Design</a></li>
                                                <li><a href='/'>Design Service</a></li>
                                                <li><a href='/'>Illustration</a></li>
                                            </ul>
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
                                <h2>Achieve your goals with our
                                    <span className='d-block'>Web Development Services</span></h2>
                                <h3 className='fs-6 my-3'>Kick start with Maze Digital Today!</h3>
                                <p className='fs-7'> Sign up with Maze Digital to achieve your goals with our <strong>web development services</strong>.
                                    The team at Maze Digital ensures that an <strong>SEO-friendly website</strong> is created to reach more customers.
                                    We make a <strong>user-friendly design interface</strong> that is easy to navigate. Moreover, we promise to build
                                    an exceptional yet functional <strong>website design</strong>, boosting sales and revenue. The mobile-friendly and responsive
                                    website will ensure the <strong>web development services</strong> are up to the mark.</p>
                                <a href='/' className='btn-style text-uppercase mt-3'>Get Started</a>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/web-services.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={styles.optimize_product}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-6 col-12 text-center mb-5'>
                                <h2 className='fw-semibold mb-3'>Bringing Maximum <br className='d-none d-md-block' /> Value to Your Business</h2>
                                <p>With affordable rates, we bring value to your business!</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-9.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Front End Development</h3>
                                    <p className='fs-7'>Committed to developing an appropriate and interactive front-end portion of your websites and web apps so that users can see and interact easily.</p>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-4.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Backend Development</h3>
                                    <p className='fs-7'>Our back-end developers ensure that the websites perform correctly. We provide that the databases, APIs, servers, and architectures are fully integrated to meet the needs.</p>
                                </div>
                            </Col>

                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-10.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Full Stack Development</h3>
                                    <p className='fs-7'>The development process ensures that one can make it a fully functioning web application. The website developers possess server-side and client-side knowledge, developing the application just as you need it to be.</p>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-11.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Low-Code Development</h3>
                                    <p className='fs-7'>With effective low-code development, we ensure that the websites and web apps can be processed for rapid growth. The drag-and-drop processes allow us to do so.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.design_process}>
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
                </section>

                <CallToAction heading="Develop Your Websites" desc="to Leverage Your Business's Potential With Maze Digital" />
                <DynamicFooter />
            </main>
        </>
    )
}

export default WebDevelopment