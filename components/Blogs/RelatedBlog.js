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
                <h3 className='fs-4 fw-semibold mb-3'>Integer Maecenas Eget Viverra. </h3>
                <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                <p className='mt-3'>by Joanna Wellick <span><AiOutlineClockCircle /> 2 minute read</span></p>
            </div>
        </div>
    )
}

export default RelatedBlog