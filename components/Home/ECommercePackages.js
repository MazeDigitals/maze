import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Scrollbars from 'react-custom-scrollbars-2';
import ContactModal from 'components/Modal/ContactModal';



function ECommercePackages() {
    const [isContactModalOpen, setContactModalOpen] = useState(false);

    const handleGetStartedClick = () => {
        setContactModalOpen(!isContactModalOpen); // Toggle the state
    };

    return (
        <>
            <ContactModal isOpen={isContactModalOpen} toggle={handleGetStartedClick} />
            <Container>
                <Row>
                    <Col className='col-12 col-md-6 col-lg-4'>
                        <div className={`pricing_card`}>
                            <div className={`p-5 text-center border_bottom`}>
                                <span>Starter Package</span>
                                <p>The package includes services to kick-start your business with our design and development services, consultation, and multiple revisions.</p>
                                <h3 className='fs-3 fw-semibold'>$925/m</h3>
                                <button onClick={handleGetStartedClick} className={`button`}>Get Started</button>
                            </div>
                            <div className='p-5'>
                                <Scrollbars style={{ height: 210 }}>
                                    <ul>
                                        <li>up to 100 products</li>
                                        <li>Content Managment System WP</li>
                                        <li>Mini shopping cart integration</li>
                                        <li>Woocommerce integration</li>
                                        <li>Payment module integration</li>
                                        <li>Easy product search</li>
                                        <li>Product review</li>
                                        <li>Mobile responsive will be additional</li>
                                        <li>Domain name (1 Year registeration)</li>
                                        <li>Cloud Hosting (1 year)</li>
                                        <li>SSL Certificate</li>
                                        <li>2 Email ID's</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                    </ul>
                                </Scrollbars>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4'>
                        <div className={`pricing_card`}>
                            <div className={`p-5 text-center border_bottom`}>
                                <span>The Ultimate package</span>
                                <p>The Ultimate package includes basic and customized services suited to your needs.</p>
                                <h3 className='fs-3 fw-semibold'>$1,425/m</h3>
                                <button onClick={handleGetStartedClick} className={`button`}>Get Started</button>
                            </div>
                            <div className='p-5'>
                                <Scrollbars style={{ height: 210 }}>
                                    <ul>
                                        <li>Up to 500 products</li>
                                        <li>Custom Design</li>
                                        <li>Content Managment System</li>
                                        <li>Custom WP or PHP development</li>
                                        <li>Mobile responsive</li>
                                        <li>Full shopping cart integration</li>
                                        <li>Payment module integration</li>
                                        <li>Easy product search</li>
                                        <li>Product review</li>
                                        <li>5 Promotional banner</li>
                                        <li>Contact Form</li>
                                        <li>Social Media Integration</li>
                                        <li>Sign up Area (for Newsletter, Offers etc)</li>
                                        <li>Dedicated Account Manager</li>
                                        <li>Domain name (1 Year registeration)</li>
                                        <li>Cloud Hosting (1 year)</li>
                                        <li>SSL Certificate</li>
                                        <li>5 Email ID's</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                    </ul>
                                </Scrollbars>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4'>
                        <div className={`pricing_card`}>
                            <div className={`p-5 text-center border_bottom`}>
                                <span>The Combo Package</span>
                                <p>A combination of multiple services with unlimited revisions. It's all in your budget!</p>
                                <h3 className='fs-3 fw-semibold'>$2,425/m</h3>
                                <button onClick={handleGetStartedClick} className={`button`}>Get Started</button>
                            </div>
                            <div className='p-5'>
                                <Scrollbars style={{ height: 210 }}>
                                    <ul>
                                        <li>Up to 1000 products</li>
                                        <li>Custom Design</li>
                                        <li>Content Managment System</li>
                                        <li>Custom WP or PHP development</li>
                                        <li>Mobile responsive</li>
                                        <li>Full shopping cart integration</li>
                                        <li>Payment module integration</li>
                                        <li>Easy product search</li>
                                        <li>Product review</li>
                                        <li>Facenook Pixel Installation</li>
                                        <li>Live Chat integration</li>
                                        <li>Google Map Integration</li>
                                        <li>Featured product showcase</li>
                                        <li>5 Promotional banner</li>
                                        <li>Contact Form</li>
                                        <li>Social Media Integration</li>
                                        <li>Sign up Area (for Newsletter, Offers etc)</li>
                                        <li>Dedicated Account Manager</li>
                                        <li>Domain name (1 Year registeration)</li>
                                        <li>Cloud Hosting (1 year)</li>
                                        <li>SSL Certificate</li>
                                        <li>up to 10 Email ID's</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                    </ul>
                                </Scrollbars>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ECommercePackages;