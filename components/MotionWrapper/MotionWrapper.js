import React from 'react';

import { motion, Variants } from "framer-motion";


// const cardVariants = {
//     offscreen: {
//         y: 400
//     },
//     onscreen: {
//         y: 0,
//         transition: {
//             type: "spring",
//             bounce: 0.6,
//             stiffness: 100,
//             duration: 0.8
//         }
//     }
// };



const MotionWrapper = ({ children }) => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            {children}
        </motion.div>

    );
}

export default MotionWrapper;

