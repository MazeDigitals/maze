import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import styles from './Sidebar.module.scss';
import logo from '../../src/images/logo-mob.svg'
import { FaPhoneAlt } from 'react-icons/fa';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Sticky Navbar 
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    // Sticky Navbar 

    return (
        <header className={`bg-white ${styles.header} ${isSticky ? 'isSticky' : ''}`}>
            <Container>
                <Navbar>
                    <NavbarBrand href="/">
                        <Image src={logo} alt="Logo" width={116} height={32} />
                    </NavbarBrand>
                    <div className='d-flex align-items-center ms-auto'>
                        <a className={styles.cont_btn} href="tel:+1 330-999-8028"><FaPhoneAlt /></a>
                        <div className={`${styles.menuToggle} ${isOpen && styles.menuOpen}`} onClick={() => setIsOpen(!isOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Navbar>
            </Container>
            <div className={`${styles.menu} ${isOpen && styles.open_menu}`}>
                <Nav className={styles.nav}>
                    <NavItem className={styles.nav_item}><NavLink className={styles.nav_link} href='/about'>About Us</NavLink></NavItem>
                    <NavItem className={styles.nav_item}><NavLink className={styles.nav_link} href='/product-design'>Services</NavLink></NavItem>
                    <NavItem className={styles.nav_item}><NavLink className={styles.nav_link} href='/portfolio'>Portfolio</NavLink></NavItem>
                    <NavItem className={styles.nav_item}><NavLink className={styles.nav_link} href='/'>Pricing</NavLink></NavItem>
                    <NavItem className={styles.nav_item}><NavLink className={styles.nav_link} href='/blogs'>Blogs</NavLink></NavItem>
                    <NavItem className={styles.nav_item}><NavLink className={styles.nav_link} href='/contact'>Contact us</NavLink></NavItem>
                </Nav>
            </div>
        </header>
    );
}

export default Sidebar