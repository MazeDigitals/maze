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
                    Exploring the World: A Visual Journey Through Captivating Landscapes
                </h2>
                <ul>
                    <li className='fs-7 fw-normal'><AiOutlineUser /> Sophia Reynolds</li>
                    <li className='fs-7 fw-normal'><AiOutlineCalendar /> June 18, 2023</li>
                </ul>
                <p className='fs-7'>Experience the Beauty of Our Planet through Stunning Images and Engaging Descriptions... </p>
                <a href='/blog-detail' className='fs-6'>Continue Reading <FaArrowRight /> </a>
            </div>
        </div>
    )
}

export default BlogCard