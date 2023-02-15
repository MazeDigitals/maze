import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import styles from './Sidebar.module.scss';
import logo from '../../src/images/logo-mob.svg'
import { FaPhoneAlt } from 'react-icons/fa';
import { motion, useScroll } from "framer-motion";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = React.useState(false);


    function update() {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);
        }
    }


    useEffect(() => {
        return scrollY.onChange(() => update());
    })


    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -25 }
    };


    return (
        <motion.header className={`fixed-top bg-white ${styles.header}`}
            variants={variants} animate={hidden ? "hidden" : "visible"}
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}>
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
        </motion.header>
    );
}

export default Sidebar