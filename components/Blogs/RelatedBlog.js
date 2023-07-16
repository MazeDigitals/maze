import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import styles from './BlogCard.module.scss';

const RelatedBlog = (props) => {
    return (
        <div className={styles.related_blog}>
            <div className={styles.img_wrap}>
                <img src={`images/related-blog-${props.imageUrl}.svg`} alt='' />
            </div>
            <div className={styles.content}>
                <h3 className='fs-4 fw-semibold mb-3'>The Power of User-Centric Design</h3>
                <p>Discover the impact of user-centric design on creating meaningful and engaging experiences. In this article, we explore the importance of understanding user needs, preferences, and behaviors to design interfaces that truly resonate. From conducting user research to implementing user feedback, we delve into the practical strategies that help designers put users at the forefront of their design process. Join Joanna Wellick as she shares her expertise and insights on how to create user-centric designs that delight and empower users.</p>
                <p className='mt-3'>by Joanna Wellick <span><AiOutlineClockCircle /> 2 minute read</span></p>
            </div>
        </div>
    )
}

export default RelatedBlog