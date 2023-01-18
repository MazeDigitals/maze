import React, { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import styles from './Header.module.scss'


function Header() {

    return (
        <header className={`fixed-top ${styles.header}`}>
            <Container>
                <Navbar>
                    <NavbarBrand href="/">
                        <img src={process.env.APP_URL + '/images/logo.svg'} alt="Logo" />
                    </NavbarBrand>
                    <Nav className={`ms-auto ${styles.navlist}`}>
                        <NavItem><NavLink className={`${styles.navItem}`} href="/">About Us</NavLink></NavItem>
                        <NavItem><NavLink className={`${styles.navItem}`} href="/">Services <img src={process.env.APP_URL + '/images/down-arrow.svg'} alt="Logo" /></NavLink></NavItem>
                        <NavItem><NavLink className={`${styles.navItem}`} href="/">Portfolio</NavLink></NavItem>
                        <NavItem><NavLink className={`${styles.navItem}`} href="/">Pricing</NavLink></NavItem>
                        <NavItem><NavLink className={`${styles.navItem}`} href="/">Blogs</NavLink></NavItem>
                        <NavItem><NavLink className={`${styles.navItem}`} href="/">Contact us</NavLink></NavItem>
                    </Nav>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header