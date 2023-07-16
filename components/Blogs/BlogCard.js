import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import styles from './BlogCard.module.scss';
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";


const BlogCard = (props) => {
    return (
        <div className={`${styles.wrapper} ${styles.blog} mb-4`}>
            <div className={`${styles.img_wrap}`}>
                <img src={`images/post-${props.imageUrl}.svg`} alt='' />
            </div>
            <div className={`${styles.content}`}>
                <h2 className='fs-3 fw-bold'>
                    <span className='d-block fs-7 fw-normal'>HEALTH & SCIENCE</span>
                    It Really Have Good Feeling When You Enjoy Nature
                </h2>
                <ul>
                    <li className='fs-7 fw-normal'><AiOutlineUser /> Areeba iq</li>
                    <li className='fs-7 fw-normal'><AiOutlineCalendar /> July 18, 2022</li>
                </ul>
                <p className='fs-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et... </p>
                <a href='/blog-detail' className='fs-6'>Continue Reading <FaArrowRight /> </a>
            </div>
        </div>
    )
}

export default BlogCard