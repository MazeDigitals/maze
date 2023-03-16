import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google';
import { Col, Container, Row } from 'reactstrap';
import styles from '@/styles/Product.module.scss';


const inter = Inter({ subsets: ['latin'] })

const DynamicHeader = dynamic(() => import('components/Header/Header'), {
    ssr: false,
})
const DynamicFooter = dynamic(() => import('components/Footer/Footer'), {
    ssr: false,
})
const DynamicDesignPackages = dynamic(() => import('components/Home/DesignPackages'), {
    ssr: false,
})

const ProductDesign = () => {
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

                <section className={styles.banner}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h1 className='text-white'>Product Design</h1>
                                <p className='text-white'>Great design results in great products. At Maze Digital, we promise to provide high-quality yet affordable product designs through our imaginative, high-end UI/UX wireframes and logo design. Through our unique and intuitive designs, we work towards branding your business successfully. Get started today with our services.</p>
                                <a href='/' className={`btn-style text-uppercase ${styles.btn_style}`}>Get Started</a>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/product-img.png" alt='' />
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
                                <h2 className='fs-1'>Attract Your Potential Clients with Our Developed High-End <span>UI/UX Designs</span></h2>
                            </Col>
                            <Col className='col-lg-5 col-md-6 col-12'>
                                <p className='text-white'>Great UI/UX designs define user interaction with the products concerning achieving their goals. A seamless UI/UX helps build a stronger connection between your customers and the product/service. A strong UI/UX ensures impactful customer satisfaction.</p>
                                <p className='text-white'>It also helps get better results in the longer run. Get started now and avail our affordable services starting from just $400.</p>
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
                                        <h3 className='fs-3 fw-semibold'>Product Design Service</h3>
                                        <p>Product designing is a result of understanding the user thoroughly well. The team at Maze Digital identifies and understands the importance between a good product design and a bad product design. Our product design services ensure that the pyramid of user needs is satisfied. This includes highlighting the fundamental needs composed of parameters such as utility, reliability, usability, pleasurability, and desirability. This means satisfying the user's and the business's needs and meeting the sweet spot.</p>

                                        <h3 className='fs-3 fw-semibold'>UX Design</h3>
                                        <p>A great web UX is meant to fulfill our client's needs, and we excel. The team provides a worthwhile and loyal experience, keeping users loyal to the product or brand. We ensure a meaningful user experience helping define the customer journey conducive to a business's success. The work centers on meeting the 16 design principles, simultaneously fulfilling your business's needs at all times. </p>

                                        <h3 className='fs-3 fw-semibold'>Design Services</h3>
                                        <p>Impactful design services make your business impactful to its customers. It helps your business stand out from the rest and serves as a valuable source of differentiation. The team at Maze Digital understands the client's needs and develops a design, adding overall value to your product or service.</p>

                                        <h3 className='fs-3 fw-semibold'>Illustration</h3>
                                        <p>Illustrations are meant to add personality to your business's overall product design. The illustration of a good business logo design and a great illustration that can also encourage your company to possess a great brand voice is important. Developing great illustrations is the keen belief of our professionals, as the personality of the brand at hand can be determined by illustrations that can help reflect emotions and convey the moods of the brand as a whole.</p>

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
                                <figure>
                                    <div className={styles.content}>
                                        <h3 className='fs-7 fw-medium'>More About Us</h3>
                                        <p>At Maze Digital, we have a designated team of experts best suited for developing unique and intuitive UI/UX, logo, and branding strategies for your businesses. Our designers are all you need.</p>
                                    </div>
                                    <img src="images/ui-ux-design.png" alt='' />
                                </figure>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <div className={styles.bg_wrap}>
                                    <h2>UI/UX DESIGN</h2>
                                    <h3 className='fs-6 my-3'>Full support with top-notch Design Experts</h3>
                                    <p className='fs-7'>Our custom UI/UX designs are developed by highly skilled professionals who have sound knowledge of visual elements, screens, icons, buttons, and toggles while developing your desired website or application. </p>
                                    <p className='fs-7'>User Interface here refers to the website or application's design about color therapy, typography, design patterns, and interactivity & animation. User experience, on the other hand, refers to how customers will engage with the application or website. Everything here rounds up to the interaction of the customer with your product.</p>
                                    <a href='/' className='btn-style text-uppercase mt-3'>Get Started</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={styles.optimize_product}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-6 col-12 text-center mb-5'>
                                <h2 className='fw-semibold mb-3'>Optimize Your Product with Seamless User Experience</h2>
                                <p className=''>We help you develop the most optimum product designs, guaranteeing an effective user experience.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-1.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Validate your ideas</h3>
                                    <p className='fs-7'>Validating your product's vision and objectives by measuring the search volume of your product idea.</p>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-2.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Attract potential users</h3>
                                    <p className='fs-7'>We perform customer validation to find out how to attract potential users to become customers by building and testing a prototype using a design sprint.</p>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-3.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Streamline experience</h3>
                                    <p className='fs-7'>Develop a simplified experience for abled, differently-abled individuals so they can access your application or website with the same functionality. It will also help you generate leads as a business.</p>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-4.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Refine website structure</h3>
                                    <p className='fs-7'>Assessing the current website's user experience to identify the developments needed is important to call a product's UX design “great.” We at Maze Digital understand and achieve the desired deadlines.</p>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-5.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Creating Value with Relevant Content</h3>
                                    <p className='fs-7'>A great content-driven user experience helps strategize a business. It also adds value proposition to the business's improved customer loyalty and retention.</p>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-6.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Improving Conversions</h3>
                                    <p className='fs-7'>Improving conversions begins with focusing on first impressions. Using past and familiar user experiences, we ensure to make it simple and fresh, meanwhile reducing the number of possible options.</p>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-7.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Improve conversions</h3>
                                    <p className='fs-7'>Improving conversions begins with focusing on first impressions. Using past and familiar user experiences, we ensure to make it simple and fresh, meanwhile reducing the number of possible options.</p>
                                </div>
                            </Col>
                            <Col className='col-lg-3 col-md-6 col-12'>
                                <div className={styles.optimize_card}>
                                    <div className={styles.icon_wrap}>
                                        <img src="images/opt-8.svg" alt='' />
                                    </div>
                                    <h3 className='fs-6 fw-bold mb-2'>Keep your brand consistent</h3>
                                    <p className='fs-7'>Brand consistency is directly proportional to boosting the design system. We ensure to development of designs that strengthen brand recognition, increase sales and marketing efforts, and improve overall brand consistency.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.design_process}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-6 col-12 text-center mb-5'>
                                <h2 className='fw-semibold'>Implementing <span className='text-primary'>Design Process,</span> Maximizing Overall Results</h2>
                                {/* <p className=''>Amet minim mollit   dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> */}
                            </Col>
                            <Col className='col-12'>
                                <ul>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Project Setup</h3>
                                        <p className='fs-7 fw-normal'>We brainstorm and define the product by conducting user research to carry on the overall process.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Research & Concept</h3>
                                        <p className='fs-7 fw-normal'>Study what the end users need from your product and enhance the overall <strong>design at affordable rates</strong>.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Wireframing</h3>
                                        <p className='fs-7 fw-normal'>Drawing overviews of interactive product designs and establishing the structure of probable <strong>design solutions.</strong></p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Testing & Validation</h3>
                                        <p className='fs-7 fw-normal'>Once the usable prototype is developed, testing and validating the application or website usability help identify whether the business's real value is being delivered. </p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Visual Design</h3>
                                        <p className='fs-7 fw-normal'>The team works on the aesthetic appeal, with images, space, typography, layout, and color to help optimize user experience, driving conversion.</p>
                                    </li>
                                    <li className='text-center'>
                                        <span className={`${styles.dot}`}></span>
                                        <h3 className='fs-6 fw-bold mb-3'>Development handover</h3>
                                        <p className='fs-7 fw-normal'>Tracking versions by developers become easier with documentation handed over to the developers, also strengthening the designer-developer relationship.</p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className={styles.ui_ux}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <h2>DESIGN SERVICES</h2>
                                <h3 className='fs-6 my-3'>Full support with top-notch Design Experts</h3>
                                <p className='fs-7'>The team at Maze Digital exclusively offers design services, helping establish effective communication and coordination with the product and business knowledge and converting valuable ideas into the company's products and services. It is the most effective way to differentiate the position of your business in the emerging digital, fast-paced world.</p>
                                <p className='fs-7'>Sign up now and avail the budget-friendly packages!</p>
                                <a href='/' className='btn-style text-uppercase mt-3'>Get Started</a>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-12'>
                                <figure>
                                    <img src="images/design-services.png" alt='' />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={`${styles.success_section}`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-10 col-12'>
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


                <section className={`${styles.pricing_section} pt-0`}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-8 col-12 text-center mb-2'>
                                <h2 className='fs-2'>PRICING</h2>
                                <p>Our pricing strategy is designed to meet the affordability of your pocket. Check out the most budget-friendly packages designed for each service.</p>
                            </Col>
                        </Row>
                    </Container>
                    <DynamicDesignPackages />
                </section>

                <section className={`${styles.custom_pack} ${styles.product}`}>
                    <Container>
                        <Row className='justify-content-between align-items-center'>
                            <Col className='col-md-6 col-12'>
                                <h2 className='fs-1 text-white fw-semibold mb-3'>Prices Start from $400 ONLY!</h2>
                                <p className='fs-6 text-white'>All plans include unlimited requests, unlimited revisions, and source files.</p>
                                <a href='/' className='btn-style mt-4'>Get a Quote</a>
                            </Col>
                            <Col className='col-md-5 col-12'>
                                <h4 className='fs-6 text-white fw-semibold mb-3'>Package includes</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur sit amet, consectetur </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur elo</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur sit amet, consectetur</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur sit amet, consectetur</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='cta-section'>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-md-8 text-center'>
                                <p className='text-white text-uppercase fs-3 mb-4'>Kick start Your Business's Growth with</p>
                                <h2 className='text-white mb-3'>Maze Digital's Team. Ignite Your Vision for a Better Future</h2>
                                <a href='#' className='btn-style mt-3'>Let's Connect</a>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <DynamicFooter />
            </main>
        </>
    )
}

export default ProductDesign