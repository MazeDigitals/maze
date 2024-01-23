import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Scrollbars from 'react-custom-scrollbars-2';
import ContactModal from 'components/Modal/ContactModal';



function DesignPackages() {
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
                                <h3 className='fs-3 fw-semibold'>$1200/m</h3>
                                <button onClick={handleGetStartedClick} className={`button`}>Get Started</button>
                            </div>
                            <div className='p-5'>
                                <Scrollbars style={{ height: 180 }}>
                                    <ul>
                                        <li>2 Logo Design Concepts</li>
                                        <li>Unlimited Revisions</li>
                                        <li>Icon Design</li>
                                        <li>All Final File Formats</li>
                                        <li>5 Pages Website</li>
                                        <li>1 Design Concept</li>
                                        <li>1 Dedicated Designer</li>
                                        <li>Turn Around 5 Business Days</li>
                                        <li>4 Stock Photos</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>Money Back Guarantee</li>
                                        <li>100% Ownership Rights</li>
                                        <li>STATIONARY DESIGN</li>
                                        <li>Business Card, Letterhead, Envelope</li>
                                        <li>MS Word Letterhead</li>
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
                                <h3 className='fs-3 fw-semibold'>$1,285/m</h3>
                                <button onClick={handleGetStartedClick} className={`button`}>Get Started</button>
                            </div>
                            <div className='p-5'>
                                <Scrollbars style={{ height: 180 }}>
                                    <ul>
                                        <li>Up to 8 pages website</li>
                                        <li>up to 5 stock images</li>
                                        <li>2 banner designs</li>
                                        <li>1 jQuery slider banner</li>
                                        <li>Complete W3C Certified HTML</li>
                                        <li>Google Map integration</li>
                                        <li>Social Media Integration</li>
                                        <li>CMS/ Admin panel</li>
                                        <li>1 Contact Form</li>
                                        <li>Sign up Area (for Newsletter, Offers etc)</li>
                                        <li>Dedicated Account Manager</li>
                                        <li>48 to 72 hours TAT</li>
                                        <li>Domain name (1 Year registeration)</li>
                                        <li>Cloud Hosting (1 year)</li>
                                        <li>SSL Certificate</li>
                                        <li>5 Email ID's</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                        <li>Mobile responsive will be additional</li>
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
                                <h3 className='fs-3 fw-semibold'>$1,935/m</h3>
                                <button onClick={handleGetStartedClick} className={`button`}>Get Started</button>
                            </div>
                            <div className='p-5'>
                                <Scrollbars style={{ height: 180 }}>
                                    <ul>
                                        <li>Up to 15 pages website</li>
                                        <li>up to 10 stock images</li>
                                        <li>5 banner designs</li>
                                        <li>1 jQuery slider banner</li>
                                        <li>Custom Design</li>
                                        <li>Complete W3C Certified HTML</li>
                                        <li>Google Map integration</li>
                                        <li>Social Media Integration</li>
                                        <li>CMS/ Admin panel</li>
                                        <li>1 Contact Form</li>
                                        <li>Sign up Area (for Newsletter, Offers etc)</li>
                                        <li>Live Chat Integration</li>
                                        <li>Mobile responsive</li>
                                        <li>Dedicated Account Manager</li>
                                        <li>48 to 72 hours TAT</li>
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

export default DesignPackages;