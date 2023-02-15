import Head from 'next/head'
import React from 'react'
import dynamic from 'next/dynamic'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.scss'
import { Col, Container, Row } from 'reactstrap'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import CallToAction from 'components/About/CallToAction'

const inter = Inter({ subsets: ['latin'] })

const DynamicHeader = dynamic(() => import('components/Header/Header'), {
    ssr: false,
})
const DynamicFooter = dynamic(() => import('components/Footer/Footer'), {
    ssr: false,
})
const DynamicAwards = dynamic(() => import('components/About/awards'), {
    ssr: false,
})
const DynamicTestimonial = dynamic(() => import('components/About/testimonial'), {
    ssr: false,
})

const About = () => {
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
                    <img src='images/about-bg.svg' className={`${styles.bg_image}`} />
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-4 col-md-8'>
                                <h1 className='text-white'>About Us</h1>
                                <p>Join us to avoid obscure, irrelevant, complicated, and, most importantly, expensively designed solutions!</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={`${styles.about_section}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-10 col-12'>
                                <Row className='justify-content-between'>
                                    <Col className='col-md-5 col-12'>
                                        <h2 className='fs-2'>With our expert services, affordable solutions can help you enter the digital world.</h2>
                                    </Col>
                                    <Col className='col-md-5 col-12'>
                                        <p>Services like e-commerce design & development, website design & development, branding, logo branding, and UI/UX designing are expanded by Maze Digital. Our cost-effective solutions ensure that you are satisfied and that your requirements are carefully met.</p>
                                        <p>Our pricing strategy justifies the Maze Digital specialists' developed solutions without hesitation. We tend to make the process easy, enjoyable, and equally beneficial for both parties by adopting an "affordable" and "budget-friendly" approach.</p>
                                    </Col>
                                    <Col className='col-md-12 col-12'>
                                        <figure><img src='images/about-img.svg' alt='img' className='img-fluid' /></figure>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={`${styles.globe_section}`}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-md-6 col-12'>
                                <h2 className='fs-1 mb-3'><span className='d-block text-primary fs-3 mb-3'>OUR MISSION</span>Maze Digital's mission is to<br /> help you successfully win and penetrate the market. </h2>
                                <p className='fs-5 fw-normal mb-3'>We believe in providing budget-friendly quality services, meeting the needs of the ongoing trends in the digital world and the business market.</p>
                                <a href='#' className='text-primary fs-5 fw-semibold d-inline-flex align-items-center mb-4'><span className='text-primary me-2'>Explore</span> <FaArrowRight /></a>
                            </Col>
                            <Col className='col-md-5 col-12'>
                                <div className={`${styles.card}`}>
                                    <h3 className='fs-5'>Specialized in Problem Solving</h3>
                                    <p className='fs-7'>We cater to your problems by firstly understanding them. We invest our time in identifying the problem and developing the best possible and productive solutions for our clients. With that, our clients trust us, establishing a trustworthy bond throughout the process.</p>
                                </div>
                                <div className={`${styles.card}`}>
                                    <h3 className='fs-5'>Excellent Design & Development Skills</h3>
                                    <p className='fs-7'>The team at Maze Digital understands the responsibility of delivering quality work within the desired time frame. Our team comprises skilled designers and developers who will carefully design and develop your e-commerce websites, other websites, logos, UI/UX, and the branding side of your business's niche. Our Excellency in carefully meeting the client's requirements has helped us restore the client's faith in availing of our budget-friendly packages.</p>
                                </div>
                                <div className={`${styles.card}`}>
                                    <h3 className='fs-5'>Flexibility, Transparency, Evaluation & Reporting</h3>
                                    <p className='fs-7'>Completing the desired tasks by being flexible with the client helps us establish the transparency of the process. We believe in back-and-forth communication with the client, which eventually allows us to accurately evaluate the project once it has been reported to the client successfully.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <img src='images/globe.svg' alt="globe" className={`${styles.globe_img}`} />
                </section>


                <section className={`${styles.choose_us}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-12 col-12 text-center mb-5'>
                                <h2 className='fs-1'><span className='d-block text-primary fs-3 mb-3'>WHY CHOOSE US </span></h2>
                                <p>Our company's mission is to provide excellent services at affordable rates. Our intuitive and lead-generating designs and development services offer customers a great experience at a low cost. We also provide budget-friendly development services with multiple revisions unless you, as our client, are highly satisfied with our work, and we guarantee always! When it comes down to a worthwhile experience, we sum it down to ensuring that our team comprises experienced developers and designers with over 10 years of experience.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-4 col-12'>
                                <div className={`${styles.card}`}>
                                    <div className={`${styles.icon_wrap}`}>
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h3 className='fs-4 fw-medium mb-2'>Easy Registration</h3>
                                        <p className='fs-7 mb-0'>Simple & interactive dashboard to monitor overall performance through a single panel</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-md-4 col-12'>
                                <div className={`${styles.card}`}>
                                    <div className={`${styles.icon_wrap}`}>
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h3 className='fs-4 fw-medium mb-2'>Precise Delivery</h3>
                                        <p className='fs-7 mb-0'>Simple & interactive dashboard to monitor overall performance through a single panel</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-md-4 col-12'>
                                <div className={`${styles.card}`}>
                                    <div className={`${styles.icon_wrap}`}>
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h3 className='fs-4 fw-medium mb-2'>Domain Expertise</h3>
                                        <p className='fs-7 mb-0'>Simple & interactive dashboard to monitor overall performance through a single panel</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-md-4 col-12'>
                                <div className={`${styles.card}`}>
                                    <div className={`${styles.icon_wrap}`}>
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h3 className='fs-4 fw-medium mb-2'>Skilled Personnel</h3>
                                        <p className='fs-7 mb-0'>Simple & interactive dashboard to monitor overall performance through a single panel</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-md-4 col-12'>
                                <div className={`${styles.card}`}>
                                    <div className={`${styles.icon_wrap}`}>
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h3 className='fs-4 fw-medium mb-2'>Superior Value</h3>
                                        <p className='fs-7 mb-0'>Simple & interactive dashboard to monitor overall performance through a single panel</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-md-4 col-12'>
                                <div className={`${styles.card}`}>
                                    <div className={`${styles.icon_wrap}`}>
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h3 className='fs-4 fw-medium mb-2'>Global Footprint</h3>
                                        <p className='fs-7 mb-0'>Simple & interactive dashboard to monitor overall performance through a single panel</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={`${styles.success_section}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-5 col-12 text-center'>
                                <h2 className='fs-1 mb-5'><span className='d-block text-primary fs-3 mb-3'>OUR SUCCESS </span>Leading Development for Modern Teams</h2>
                            </Col>
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


                <section className={`${styles.work_section}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-8 col-12 text-center mb-5'>
                                <h2 className='fs-1 mb-3'>How we work</h2>
                                <p className='fs-6'>With Maze Digital, you get the most affordable, budget-friendly services. We offer to engage and design e-commerce platforms, websites, logos, UI/UX, and branding of your business, making it useful to both techies and non-techies. Our work process makes it all worth it.</p>
                            </Col>
                            <Col className='col-lg-9 col-12'>
                                <ul>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Project Kickoff</h3>
                                        <p className='fs-7 fw-normal'>We first kick off the project by meeting with our client, where common goals and the project's purpose are established.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Ideation and Evaluation</h3>
                                        <p className='fs-7 fw-normal'>The next step is to generate ideas for a solution to our client's problems. Based on the ideas, the evaluation process helps in decision-making on approaching the design and development of the desired product.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Design Process</h3>
                                        <p className='fs-7 fw-normal'>The third approachable step is to design a project plan by outlining the stages.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Development Process</h3>
                                        <p className='fs-7 fw-normal'>The process involves allocating resources to develop the product from the initial concept to going live. </p>
                                    </li>
                                </ul>

                                <ul className='mt-5'>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Implementation</h3>
                                        <p className='fs-7 fw-normal'>We then implement the project in the live environment to see for any shortcomings, or if there is any concern from the client, we ensure to cater to it.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Quality Assurance</h3>
                                        <p className='fs-7 fw-normal'>It is extremely important to monitor the project's performance to check whether it's functioning well. We ensure that the project is fit for all necessary test cases.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Reviewing & Reporting</h3>
                                        <p className='fs-7 fw-normal'>After the project is developed, implemented, and tested, the team reviews and reports the final molded product to the client as the last and precise delivery.</p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <DynamicTestimonial />


                <section className={`${styles.clients_section}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-6 col-12 text-center'>
                                <h2 className='fs-1'>Our Clients</h2>
                                <p className='fs-5'>Our clients belong from well-reputed industry backgrounds with a knack for developing products in the emerging digital world. Have a look!</p>
                            </Col>
                            <Col className='col-md-12 text-center'>
                                <img src='images/brand-logos.svg' alt='brand logo' className='w-100' />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <DynamicAwards />

                <CallToAction heading="Easy-To-Follow" desc="Business Building Experience Ensuring Affordability to Your Pocket" />

                <DynamicFooter />
            </main>
        </>
    )
}

export default About;