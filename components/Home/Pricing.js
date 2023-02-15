import React, { useState } from 'react'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import styles from '@/styles/Home.module.scss'
import WebPackages from './WebPackages';
import ECommercePackages from './ECommercePackages';
import DesignPackages from './DesignPackages';


function Pricing() {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <>
            {/* PRICING SECTION */}
            <section className={`${styles.pricing_section}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col className='col-lg-6 col-md-8 col-12 text-center mb-4'>
                            <h4 className='fw-semibold mb-2'>PRICING</h4>
                            <p className='fw-normal'>Our pricing strategy is designed to meet the affordability of your pocket. Check out the most budget-friendly packages designed for each service.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-12'>
                            <Nav className={`justify-content-center border-0 ${styles.tab_cont}`} tabs>
                                <NavItem className={`${styles.tab_item}`}>
                                    <NavLink className={`${styles.tab_link} ${activeTab == '1' ? styles.active : ''}`} onClick={() => setActiveTab('1')}>Ecommerce</NavLink>
                                </NavItem>
                                <NavItem className={`${styles.tab_item}`}>
                                    <NavLink className={`${styles.tab_link} ${activeTab == '2' ? styles.active : ''}`} onClick={() => setActiveTab('2')}>Web Development</NavLink>
                                </NavItem>
                                <NavItem className={`${styles.tab_item}`}>
                                    <NavLink className={`${styles.tab_link} ${activeTab == '3' ? styles.active : ''}`} onClick={() => setActiveTab('3')}>Design Service</NavLink>
                                </NavItem>
                                <NavItem className={`${styles.tab_item}`}>
                                    <NavLink className={`${styles.tab_link} ${activeTab == '4' ? styles.active : ''}`} onClick={() => setActiveTab('4')}>UI/UX Design</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <ECommercePackages />
                        <div className='text-center mt-2'>
                            <a href='/ecommerce' className={`${styles.custom_button}`}>View details</a>
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <WebPackages />
                        <div className='text-center mt-2'>
                            <a href='/web-development' className={`${styles.custom_button}`}>View details</a>
                        </div>
                    </TabPane>
                    <TabPane tabId="3">
                        <DesignPackages />
                        <div className='text-center mt-2'>
                            <a href='/product-design' className={`${styles.custom_button}`}>View details</a>
                        </div>
                    </TabPane>
                    <TabPane tabId="4">
                        <DesignPackages />
                        <div className='text-center mt-2'>
                            <a href='/product-design' className={`${styles.custom_button}`}>View details</a>
                        </div>
                    </TabPane>
                </TabContent>
            </section>
            {/* PRICING SECTION */}
        </>
    )
}

export default Pricing