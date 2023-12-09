import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { Col, Container, Row } from 'reactstrap'
import { motion, Variants } from "framer-motion";
import MotionWrapper from 'components/MotionWrapper/MotionWrapper'
import ContactModal from 'components/Modal/ContactModal'




const inter = Inter({ subsets: ['latin'] })

const DynamicHeader = dynamic(() => import('components/Header/Header'), {
  ssr: false,
})
const DynamicFooter = dynamic(() => import('components/Footer/Footer'), {
  ssr: false,
})
const DynamicBlogs = dynamic(() => import('components/Home/Blogs'), {
  ssr: false,
})
const DynamicPricing = dynamic(() => import('components/Home/Pricing'), {
  ssr: false,
})


const cardVariants = {
  offscreen: {
    y: 400
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      stiffness: 100,
      duration: 0.8
    }
  }
};

const textVariants = {
  offscreen: {
    x: -1000
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 1,
      stiffness: 50,
      duration: 1,
      delay: 1
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}




export default function Home() {
  const introVideoRef = useRef(null);
  const introLoopVideoRef = useRef(null);

  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setContactModalOpen(!isContactModalOpen); // Toggle the state
  };


  useEffect(() => {
    const introVideo = introVideoRef.current;
    const introLoopVideo = introLoopVideoRef.current;

    // Set the opacity of the intro-loop video to 0 initially
    introLoopVideo.style.opacity = '0';

    // Add an event listener to the intro video to detect when it ends
    introVideo.addEventListener('ended', function () {
      // When the intro video ends, hide it and show the intro-loop video
      introVideo.style.opacity = '0';
      introLoopVideo.style.opacity = '1';

      // Start playing the intro-loop video
      introLoopVideo.play();
    });

    // Add an event listener to the intro video to track time updates
    introVideo.addEventListener('timeupdate', function () {
      // You can add a condition based on the current time of the video
      const currentTime = introVideo.currentTime;

      // Example: When the intro video reaches a certain time (e.g., 5 seconds), do something
      if (currentTime >= 5) {
        // Add your condition and actions here
      }
    });
  }, []);



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
        <ContactModal isOpen={isContactModalOpen} toggle={handleGetStartedClick} />


        {/* BANNER SECTION */}
        <section className={`${styles.banner} text-left`}>
          <div className="video-background">
            <video className="intro" muted playsInline autoPlay ref={introVideoRef}>
              <source src="/videos/intro.webm" type="video/webm" />
              <source src="/videos/intro.mp4" type="video/mp4" />
            </video>
            <video className="intro-loop" muted playsInline loop ref={introLoopVideoRef}>
              <source src="/videos/loop.webm" type="video/webm" />
              <source src="/videos/loop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.content_wrapper}>
            <Container>
              <Row>
                <Col>
                  <MotionWrapper>
                    <motion.h1 variants={textVariants}>Creating Cost-Effective <br /> Solutions for You </motion.h1>
                    <motion.p variants={textVariants}>Create a presence that keeps you winning in these short turnaround times. As a <br className='d-none d-lg-block' />
                      design and development company in the USA, we excel at our expertise.</motion.p>
                  </MotionWrapper>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        {/* BANNER SECTION */}

        {/* ABOUT SECTION */}
        <section className={`${styles.aboutSec}`}>
          <Container>
            <Row className='justify-content-center'>
              <Col className='col-lg-9 col-12'>
                <div className={`${styles.domainSearch}`}>
                  {/* <Row>
                    <Col className='col-md-6 col-12'>
                      <h3 className='fw-semibold'>Domain Name Search <br className='d-none d-lg-block' /> Buy a Domain In Minutes</h3>
                    </Col>
                    <Col className='col-md-6 col-12'>
                      <p>Your domain helps people find you online and makes a first impression. Find one that represents you perfectly.</p>
                    </Col>
                    <Col className='col-md-12'>
                      <div className={`${styles.inputField}`}>
                        <input className='form-control' type="email" placeholder='Enter the domain of your choice' />
                        <button className="btn btn-md btn-primary text-light" type='submit'>Search Domain</button>
                      </div>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col className='col-md-12'>
                      <h3 className='fw-semibold text-center'>Need a website that stands out in a crowded market? <br /> Contact us for an affordable and customized solution.</h3>
                      {/* <p className='text-center'>Need a website that stands out in a crowded market? We can help. Contact us for an affordable and customized solution.</p> */}
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='col-lg-6 col-md-10'>
                <h2 className='mb-5'>Say Hello to <span>Maze Digital</span></h2>
                <h4 className='mb-3'>Building You That Keeps You Winning</h4>
                <p>We have a knack for grabbing visitors’ attention and transforming them into potential clients. We offer affordable packages
                  to do so! Our unique and intuitive designs, carefully tailored to meet your needs, help you establish a market presence that
                  keeps you winning.</p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ABOUT SECTION */}

        {/* WHAT WE DO SECTION */}
        <section className={`${styles.services}`}>
          <Container>
            <Row className='justify-content-center'>
              <Col className='col-lg-5 col-md-8 col-12 text-center mb-3'>
                <h4 className='fw-semibold mb-2'>WHAT WE DO</h4>
                <p className='fw-normal'>Leveraging your business's potential, providing high-end designs and development services, resulting in quality outcomes.</p>
              </Col>
            </Row>
            <Row>
              <Col className='col-lg-3 col-md-6 col-12'>
                <MotionWrapper>
                  <motion.div variants={{
                    offscreen: {
                      y: 300
                    },
                    onscreen: {
                      y: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.6,
                        stiffness: 100,
                        duration: 0.8
                      }
                    }
                  }} className={`${styles.card}`}>
                    <img src='/images/icon-1.svg' alt="icon" />
                    <h2>UI/UX Design</h2>
                    <p>With a great user interface and user experience, we ensure to define your business's motive just as you want it to be. With careful research concerning ongoing trends in the UI/UX world, the team at Maze Digital makes sure that our budget-friendly packages incorporate all the desired designing services you need from us!</p>
                  </motion.div>
                </MotionWrapper>
              </Col>
              <Col className='col-lg-3 col-md-6 col-12'>
                <MotionWrapper>
                  <motion.div variants={{
                    offscreen: {
                      y: 300
                    },
                    onscreen: {
                      y: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.6,
                        stiffness: 100,
                        duration: 0.8,
                        delay: 0.3
                      }
                    }
                  }} className={`${styles.card}`}>
                    <img src='/images/icon-2.svg' alt="icon" />
                    <h2>Design Service</h2>
                    <p>We provide logo designing services, keeping specific business niches in mind. A company's logo defines its core values, and the purpose served to its customers/clients. Our main motive is to also do the branding services by first illustrating the perfect logo design best suited for your business's mission and vision.</p>
                  </motion.div>
                </MotionWrapper>
              </Col>
              <Col className='col-lg-3 col-md-6 col-12'>
                <MotionWrapper>
                  <motion.div variants={{
                    offscreen: {
                      y: 300
                    },
                    onscreen: {
                      y: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.6,
                        stiffness: 100,
                        duration: 0.8,
                        delay: 0.5
                      }
                    }
                  }} className={`${styles.card}`}>
                    <img src='/images/icon-3.svg' alt="icon" />
                    <h2>Web Development</h2>
                    <p>The world is moving towards believing that websites can do wonders in digitally growing a business's potential. With the right SEO tools and web development knowledge, the team at Maze Digital expertizes in developing the exact website you need. It all comes down to bringing together a masterpiece in a budget-friendly package.</p>
                  </motion.div>
                </MotionWrapper>
              </Col>
              <Col className='col-lg-3 col-md-6 col-12'>
                <MotionWrapper>
                  <motion.div variants={{
                    offscreen: {
                      y: 300
                    },
                    onscreen: {
                      y: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.6,
                        stiffness: 100,
                        duration: 0.8,
                        delay: 0.7
                      }
                    }
                  }} className={`${styles.card}`}>
                    <img src='/images/icon-4.svg' alt="icon" />
                    <h2>Ecommerce</h2>
                    <p>The E-Commerce market is significantly growing at a much faster pace than ever. The experts at Maze Digital design and develop E-Commerce websites that possess responsive designs with user-friendly navigation, fulfilling the needs of our valuable clients.</p>
                  </motion.div>
                </MotionWrapper>
              </Col>
            </Row>
          </Container>
        </section>
        {/* WHAT WE DO SECTION */}

        {/* SERVICES SECTION */}
        <section className={`${styles.services_section}`}>
          <Container>
            <Row className='justify-content-center d-flex d-md-none d-lg-none'>
              <Col className='col-lg-4 col-md-8 col-12 text-center mb-5'>
                <h4 className='fw-semibold mb-2'>Empowering Digital Success</h4>
                <p className='fw-normal'>Develop results-driven products for entrepreneurs, startups, and enterprises with a leading software development company.</p>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col className='col-lg-10 col-12'>
                <Row className='align-items-center'>
                  <Col className='col-md-6 col-12'>
                    <h2>
                      <span className='d-block'>Web Solutions</span>
                      Increase Online Visibility
                      {/* <br />Ecommerce Websites */}
                    </h2>
                    <p>We provide website design and development services that are optimized for search engines and provide a great user experience. This means your website is more likely to rank highly in search engine results pages, increasing your online visibility and driving more traffic to your website. </p>
                    {/* <button className='btn-style'>VIEW CASE STUDY</button> */}
                  </Col>
                  <Col className='col-md-6 col-12'>
                    <MotionWrapper>
                      <motion.figure variants={cardVariants} className='text-end'>
                        <img src='/images/service-img-1.png' alt="image" />
                      </motion.figure>
                    </MotionWrapper>
                  </Col>
                </Row>
                <Row className='align-items-center flex-row-reverse'>
                  <Col className='col-md-6 col-12'>
                    <h2><span className='d-block'>Tailored Solutions</span> Customizable Solutions
                      {/* <br />Ecommerce Websites */}
                    </h2>
                    <p>We offer customizable solutions to meet your unique business needs, whether you need a complete website redesign or just help with a specific aspect of your online presence. This means you can choose the services that are most relevant to your business and budget. </p>
                    {/* <button className='btn-style'>VIEW CASE STUDY</button> */}
                  </Col>
                  <Col className='col-md-6 col-12'>
                    <MotionWrapper>
                      <motion.figure variants={cardVariants} className='text-start'>
                        <img src='/images/service-img-2.png' alt="image" />
                      </motion.figure>
                    </MotionWrapper>
                  </Col>
                </Row>
                <Row className='align-items-center'>
                  <Col className='col-md-6 col-12'>
                    <h2><span className='d-block'>UI/UX Design</span> Boost Conversions
                      {/* <br />Ecommerce Websites */}
                    </h2>
                    <p>Our team of designers and developers are experienced in creating exceptional user experiences that boost conversions and enhance brand reputation. We can help you design and develop a website that is not only visually stunning but also highly functional and user-friendly, leading to higher conversion rates and more sales. </p>
                    {/* <button className='btn-style'>VIEW CASE STUDY</button> */}
                  </Col>
                  <Col className='col-md-6 col-12'>
                    <MotionWrapper>
                      <motion.figure variants={cardVariants} className='text-end'>
                        <img src='/images/service-img-3.png' alt="image" />
                      </motion.figure>
                    </MotionWrapper>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        {/* SERVICES SECTION */}

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

        <DynamicPricing />

        {/* Quotation Section */}
        <section className={`${styles.custom_pack}`}>
          <Container>
            <Row className='align-items-center'>
              <Col className='col-lg-7 col-md-6 col-12'>
                <h3 className='text-white fw-semibold mb-3'>Custom Jumbo Pack</h3>
                <p className='text-white fw-normal mb-4'>At our company, we take pride in the expertise and dedication of our team of designers and developers. Our goal is to deliver a customized website with design and mobile application. Complete brand identity solution that not only meets but exceeds your expectations, all while keeping it affordable.</p>
                <Row>
                  <Col className='col-lg-6 col-12'>
                    <h4 className='fs-6 text-white fw-semibold mb-3'>Design and Development</h4>
                    <ul>
                      <li>Get a complete custom IT solution for your brand</li>
                      <li>Establish a strong presence on every platform for easy brand accessibility</li>
                      <li>Dedicated and highly professional team solely focused on your brand's success</li>
                      <li>Tailored and scalable solutions to meet your brand's unique needs and future growth goals.</li>
                    </ul>
                  </Col>
                  <Col className='col-lg-6 col-12'>
                    <h4 className='fs-6 text-white fw-semibold mb-3'>SEO and Digital Marketing</h4>
                    <ul>
                      <li>Boost your online visibility and brand awareness with our expert SEO strategies.</li>
                      <li>Create engaging and relevant content to attract and retain your target audience.</li>
                      <li>Maximize your ROI with data-driven digital marketing campaigns.</li>
                      <li>Stay ahead of the competition with regular analysis, optimization, and reporting of your digital marketing efforts.</li>
                    </ul>
                  </Col>
                </Row>
                <button className='btn-style mt-5 d-none d-md-inline-block d-lg-inline-block' onClick={handleGetStartedClick}>Get Started</button>
              </Col>
              <Col className='col-lg-5 col-md-6 col-12'>
                <div className={`form_section`}>
                  <h3 className='fw-semibold mb-3'>Not sure about pricing?</h3>
                  <p className='mb-4'>Let's get connected and level up your brand.</p>
                  <div className={`input_field`}>
                    <input type="text" className='w-100' placeholder='Name' />
                  </div>
                  <div className={`input_field`}>
                    <input type="text" className='w-100' placeholder='Phone Number' />
                  </div>
                  <div className={`input_field`}>
                    <input type="text" className='w-100' placeholder='Email' />
                  </div>
                  <div className={`input_field`}>
                    <textarea type="text" className='w-100' placeholder='Message'>

                    </textarea>
                  </div>
                  <button className='btn-style w-100'>Lets Connect</button>
                  <p className='fs-7 text-center mt-2'>Prefer Email? <a href='mailto:sale@mazeglobal.com'>sale@mazeglobal.com</a></p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Quotation Section */}

        <DynamicBlogs />

        <section className={`${styles.our_clients}`}>
          <Container>
            <div className={`${styles.content_box}`}>
              <Row className='justify-content-between align-items-center'>
                <Col className='col-lg-5 col-md-6 col-12'>
                  <h3 className='fs-1 text-white fw-semibold'><span className='text-white fw-medium d-block fs-5'>OUR CLIENTS</span>Trusted From Over 1,500 Clients</h3>
                </Col>
                <Col className='col-lg-5 col-md-6 col-12'>
                  <p className='text-white'>“Great team to work with, they understood my requirements and helped me go live within hours, and delivered the results ahead of schedule."</p>
                  <button className='text-uppercase btn-style border shadow-none' onClick={handleGetStartedClick}>Get Started</button>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <DynamicFooter />
      </main>
    </>
  )
}

