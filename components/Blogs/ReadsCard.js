import React from 'react'
import styles from './BlogCard.module.scss';
import { AiOutlineCalendar } from "react-icons/ai";


const ReadsCard = (props) => {
    return (
        <div className={`${styles.wrapper} mb-4`}>
            <div className={`${styles.img_wrap}`}>
                <img src={`images/reads-${props.imageUrl}.svg`} alt='' />
            </div>
            <div className={`${styles.content} p-1`}>
                <h2 className='fs-6 fw-normal'>Worried for Your Plants With This Cold Weather?</h2>
                <ul className='mt-1 mb-0'>
                    <li className='fs-7 fw-normal'><AiOutlineCalendar /> July 18, 2022</li>
                </ul>
            </div>
        </div>
    )
}

export default ReadsCard