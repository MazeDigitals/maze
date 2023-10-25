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
                <figure class="figure">
                  <img src="/images/banner-img.svg" class="img-fluid" alt="banner image" />
                </figure>
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
