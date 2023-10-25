import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { Inter } from "@next/font/google";
import { Col, Container, Row } from "reactstrap";
import styles from "@/styles/LandingPage.module.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const DynamicHeader = dynamic(() => import("components/Header/Header"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("components/Footer/Footer"), {
  ssr: false,
});

const landingPage = () => {
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
            <Row className='align-items-center'>
              <Col className='col-lg-6 col-12'>
                <h1 className="fs-5 fw-semibold opensans">TURN YOUR WEBSITE INTO A CONVERSION MACHINE</h1>
                <h2 className="opensans">Professional, Affordable WordPress Solutions Tailored Just for You</h2>
                <p className="fs-5 fw-normal opensans mb-4">Your website isn't just a digital business card; it's a powerful marketing tool. At Maze Digital, we leverage the power of WordPress to craft websites that don't just look good but drive results.</p>
                <Link href="#" className="btn-style">Get Started today</Link>
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
              <Row>
                <Col className='col-md-3 col-sm-6'>
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
                <Col className='col-md-3 col-sm-6'>
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
                <Col className='col-md-3 col-sm-6'>
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
                <Col className='col-md-3 col-sm-6'>
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
            <Row className="align-items-center">
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
            <Row className="align-items-center">
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

        <DynamicFooter />
      </main>
    </>
  );
};

export default landingPage;
