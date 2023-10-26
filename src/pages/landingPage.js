import Head from "next/head";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Inter } from "@next/font/google";
import { Col, Container, Row } from "reactstrap";
import styles from "@/styles/LandingPage.module.scss";
import Link from "next/link";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';


const inter = Inter({ subsets: ["latin"] });

const DynamicHeader = dynamic(() => import("components/Header/Header"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("components/Footer/Footer"), {
  ssr: false,
});

const landingPage = () => {


  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };


  return (
    <>
      <Head>
        <title>
          Leverage Your Business's Potential with Maze Digital Today!
        </title>
        <meta
          name="description"
          content="We deliver quality UI/UX designs, branding services, logo designing services, e-commerce, website, and web app development services, exclusively tailored for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <DynamicHeader />
        {/* Banner Section start */}
        <section className={styles.banner}>
          <Container>
            <Row className='align-items-center gy-4'>
              <Col className='col-lg-6 col-12'>
                <div className={styles.wrapper}>
                  <img src="/images/bg-star.svg" class="img-fluid" alt="Star" />
                  <h1 className="fs-5 fw-semibold opensans">TURN YOUR WEBSITE INTO A CONVERSION MACHINE</h1>
                  <h2 className="opensans">Professional, Affordable WordPress Solutions Tailored Just for You</h2>
                  <p className="fs-5 fw-normal opensans mb-4">Your website isn't just a digital business card; it's a powerful marketing tool. At Maze Digital, we leverage the power of WordPress to craft websites that don't just look good but drive results.</p>
                  <Link href="#" className="btn-style">Get Started today</Link>
                </div>
              </Col>
              <Col className='col-lg-6 col-12'>
                <figure>
                  <img src="/images/banner-img.svg" class="img-fluid" alt="banner image" />
                </figure>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Banner Section Ends */}

        {/* Info box Section Start */}
        <section className={`${styles.aboutSec}`}>
          <Container>
            <div className={`${styles.info_wrapper}`}>
              <Row className="gy-4">
                <Col className='col-lg-3 col-sm-6 col-12'>
                  <div className={styles.info_box}>
                    <figure>
                      <img src="/images/ranking.svg" class="img-fluid" alt="icon" />
                    </figure>
                    <div className={styles.content}>
                      <h3>12k+</h3>
                      <p>5-star Google reviews</p>
                    </div>
                  </div>
                </Col>
                <Col className='col-lg-3 col-sm-6 col-12'>
                  <div className={styles.info_box}>
                    <figure>
                      <img src="/images/user-tick.svg" class="img-fluid" alt="icon" />
                    </figure>
                    <div className={styles.content}>
                      <h3>40+</h3>
                      <p>WordPress experts</p>
                    </div>
                  </div>
                </Col>
                <Col className='col-lg-3 col-sm-6 col-12'>
                  <div className={styles.info_box}>
                    <figure>
                      <img src="/images/timer-start.svg" class="img-fluid" alt="icon" />
                    </figure>
                    <div className={styles.content}>
                      <h3>100%</h3>
                      <p>uptime guarantee</p>
                    </div>
                  </div>
                </Col>
                <Col className='col-lg-3 col-sm-6 col-12'>
                  <div className={styles.info_box}>
                    <figure>
                      <img src="/images/verified.svg" class="img-fluid" alt="icon" />
                    </figure>
                    <div className={styles.content}>
                      <h3>12+ years</h3>
                      <p>serving WordPress clients</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        {/* Info box Section Ends */}

        {/* Services Section Start */}
        <section className={`${styles.services_section}`}>
          <Container>
            <Row className="align-items-center gy-4">
              <Col className="col-md-6 col-12">
                <figure>
                  <img src="/images/service-1.png" class="img-fluid" alt="Services" />
                </figure>
              </Col>
              <Col className="col-md-6 col-12">
                <h2 className="fs-5 fw-semibold mb-3 opensans">We're a team of 40+, headquartered in the US</h2>
                <h3 className="fw-bold opensans">Real people doing <br className="d-none d-md-block" /> real work, with <br className="d-none d-md-block" /> clients that matter</h3>
                <p className="fs-4 fw-normal">Our strength is our team. With over 40 experts based in the US, we've combined talents from project managers, designers, developers, and support staff to emerge as a leading WordPress agency.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`${styles.services_section} ${styles.bg}`}>
          <Container>
            <Row className="align-items-center gy-4">
              <Col className="col-md-6 col-12">
                <h2 className="fs-5 fw-semibold mb-3 opensans">We're a team of 40+, headquartered in the US</h2>
                <h3 className="fw-bold opensans">Expert WordPress <br className="d-none d-md-block" /> design, development, <br className="d-none d-md-block" /> support & maintenance</h3>
                <p className="fs-4 fw-normal">Our process is simple: We envision your dream website, and then we build it. With Maze Digital, you're assured of world-class WordPress solutions tailored to your unique business needs.</p>
              </Col>
              <Col className="col-md-6 col-12">
                <figure>
                  <img src="/images/service-2.png" class="img-fluid" alt="Services" />
                </figure>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Services Section Ends */}

        <section className={`${styles.services_section} ${styles.wp_services}`}>
          <Container>
            <Row className="justify-content-between gy-4">
              <Col className="col-md-12 col-12 text-center">
                <h2 className="fs-5 fw-semibold mb-3 opensans"><img src="/images/logo-icon.png" class="img-fluid" alt="Services" /> MAZE DIGITAL</h2>
                <h3 className="fw-bold opensans">Dependable WordPress Services</h3>
                <p className="fs-4 fw-normal">From the initial design phase to ongoing support, Maze Digital has you covered.</p>
              </Col>

              <Col className="col-md-5 col-12">
                <div className={styles.wp_service_card}>
                  <figure>
                    <img src="/images/wp-1.png" class="img-fluid" alt="icon" />
                  </figure>
                  <div className={styles.content}>
                    <h4 className="fw-semibold mb-0 opensans">WordPress design</h4>
                    <p className="fs-6 fw-normal mb-0">Cutting-edge design techniques meet world-class WordPress solutions.</p>
                  </div>
                </div>
                <div className={styles.wp_service_card}>
                  <figure>
                    <img src="/images/wp-2.png" class="img-fluid" alt="icon" />
                  </figure>
                  <div className={styles.content}>
                    <h4 className="fw-semibold mb-0 opensans">WordPress development</h4>
                    <p className="fs-6 fw-normal mb-0">Our developers bring your vision to life, ensuring a site that's both functional and aesthetically pleasing.</p>
                  </div>
                </div>
                <div className={styles.wp_service_card}>
                  <figure>
                    <img src="/images/wp-3.png" class="img-fluid" alt="icon" />
                  </figure>
                  <div className={styles.content}>
                    <h4 className="fw-semibold mb-0 opensans">WordPress support</h4>
                    <p className="fs-6 fw-normal mb-0">Round-the-clock assistance ensures your site runs smoothly, always.</p>
                  </div>
                </div>
                <div className={styles.wp_service_card}>
                  <figure>
                    <img src="/images/wp-4.png" class="img-fluid" alt="icon" />
                  </figure>
                  <div className={styles.content}>
                    <h4 className="fw-semibold mb-0 opensans">WordPress maintenance</h4>
                    <p className="fs-6 fw-normal mb-0">We handle the technicalities, ensuring optimal site performance.</p>
                  </div>
                </div>
                <div className={styles.wp_service_card}>
                  <figure>
                    <img src="/images/wp-5.png" class="img-fluid" alt="icon" />
                  </figure>
                  <div className={styles.content}>
                    <h4 className="fw-semibold mb-0 opensans">WordPress retainers</h4>
                    <p className="fs-6 fw-normal mb-0">Benefit from a dedicated team that knows your business and needs.</p>
                  </div>
                </div>
              </Col>
              <Col className="col-md-5 col-12">
                <figure className={styles.img_wrapper}>
                  <img src="/images/star-1.svg" class={`img-fluid ${styles.star}`} alt="Star" />
                  <img src="/images/3d-image.png" class="img-fluid" alt="3d rendering website hosting concept" />
                </figure>
              </Col>


              <Col className="col-12 text-center mt-5">
                <div className={styles.button_wrapper}>
                  <hr />
                  <Link href="#" className={`${styles.btnstyle}`}>GET STARTED NOW <img src="/images/arrow-long.svg" class="img-fluid" alt="Star" /></Link>
                  <hr />
                </div>
              </Col>
            </Row>

          </Container>
        </section>


        {/* Achivements Section */}
        <section className={`${styles.achivement_section}`}>
          <img src='images/achievment_bg.png' alt='bg' className={styles.bg_img} />
          <Container>
            <Row className='justify-content-center'>
              <Col className='col-lg-4 col-md-8 col-12 text-center mb-4'>
                <h4 className='fw-semibold text-white mb-2'>ACHIEVEMENTS</h4>
                <p className='fw-normal text-white'>We are thrilled to put together some amazing projects that got us positive reviews from our loyal clients.</p>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col className='col-lg-4 col-md-6 col-12'>
                <div className={`${styles.card} text-center`}>
                  <h3 className='fs-5 fw-normal'>Maze Digital is rated <br /> Excellent</h3>
                  <div className='d-flex align-items-center justify-content-center my-2'>
                    <img src='/images/trustpilot-star.svg' alt="icon" />
                    <img src='/images/trustpilot-star.svg' alt="icon" />
                    <img src='/images/trustpilot-star.svg' alt="icon" />
                    <img src='/images/trustpilot-star.svg' alt="icon" />
                    <img src='/images/trustpilot-star.svg' alt="icon" />
                  </div>
                  <p className='fs-7 fw-light'>Based on <strong className='fw-semibold'>456 reviews</strong></p>
                  <span className='fs-6 fw-normal d-flex'><img src='/images/trustpilot-logo.svg' alt="icon" />Trustpilot</span>
                </div>
              </Col>
              <Col className='col-lg-4 col-md-6 col-12'>
                <div className={`${styles.card} text-center`}>
                  <h3 className='fs-5 fw-normal'>Maze Digital is rated with <br /> 4.8 Stars</h3>
                  <div className='d-flex align-items-center justify-content-center my-2'>
                    <img src='/images/star.svg' alt="icon" />
                    <img src='/images/star.svg' alt="icon" />
                    <img src='/images/star.svg' alt="icon" />
                    <img src='/images/star.svg' alt="icon" />
                    <img src='/images/star.svg' alt="icon" />
                  </div>
                  <p className='fs-7 fw-light'>Based on <strong className='fw-semibold'>152 reviews</strong></p>
                  <span className='fs-6 fw-normal d-flex'><img src='/images/google.svg' alt="icon" />Google Reviews</span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Achivements Section */}

        {/* Get In TOUCH */}
        <section className={styles.get_in_touch}>
          <Container>
            <Row>
              <Col className="col-12 text-center">
                <ul>
                  <li><img src='/images/avatar-1.png' alt="icon" /></li>
                  <li><img src='/images/avatar-2.png' alt="icon" /></li>
                  <li><img src='/images/avatar-3.png' alt="icon" /></li>
                </ul>
                <h3 className="fs-4 fw-medium">Still have questions?</h3>
                <p className="fs-5 fw-normal">We're here to assist. Chat with our dedicated team today for all your WordPress needs.</p>
                <Link href="#" className="btn-style text-uppercase">Get In Touch</Link>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Get In TOUCH */}

        <section className={styles.faq_section}>
          <Container>
            <Row className="justify-content-center">
              <Col className="col-12 text-center mb-5">
                <h2 className="fs-1 mb-2">Frequently asked questions</h2>
                <p className="fs-4 fw-normal">Everything you need to know about the Maze Digital Services.</p>
              </Col>

              <Col className="col-md-8 col-12">
                <Accordion open={open} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader targetId="1">
                      <h3 className="fs-5 opensans fw-semibold mb-0">What is Maze Digital's primary expertise?</h3>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      <p>Maze Digital specializes in website design and development, with a focus on ensuring your website isn't just a brochure, but a tool that offers a great user experience and helps convert leads.</p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="2">
                      <h3 className="fs-5 opensans fw-semibold mb-0">How experienced is the Maze Digital team with WordPress?</h3>
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      <p>Maze Digital specializes in website design and development, with a focus on ensuring your website isn't just a brochure, but a tool that offers a great user experience and helps convert leads.</p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="3">
                      <h3 className="fs-5 opensans fw-semibold mb-0">What sets Maze Digital apart in terms of service reliability?</h3>
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      <p>Maze Digital specializes in website design and development, with a focus on ensuring your website isn't just a brochure, but a tool that offers a great user experience and helps convert leads.</p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="4">
                      <h3 className="fs-5 opensans fw-semibold mb-0">Do you offer continuous support and maintenance for WordPress websites?</h3>
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                      <p>Maze Digital specializes in website design and development, with a focus on ensuring your website isn't just a brochure, but a tool that offers a great user experience and helps convert leads.</p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="5">
                      <h3 className="fs-5 opensans fw-semibold mb-0">How can I initiate a project with Maze Digital?</h3>
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                      <p>Maze Digital specializes in website design and development, with a focus on ensuring your website isn't just a brochure, but a tool that offers a great user experience and helps convert leads.</p>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="6">
                      <h3 className="fs-5 opensans fw-semibold mb-0">How does Maze Digital ensure client satisfaction?</h3>
                    </AccordionHeader>
                    <AccordionBody accordionId="6">
                      <p>Maze Digital specializes in website design and development, with a focus on ensuring your website isn't just a brochure, but a tool that offers a great user experience and helps convert leads.</p>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>

        <DynamicFooter />
      </main>
    </>
  );
};

export default landingPage;
