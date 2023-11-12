// ImageReveal.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = () => {
    useEffect(() => {
        gsap.fromTo(
            '.hidden-image',
            {
                opacity: 0,
                y: '20%',
            },
            {
                opacity: 1,
                y: '0%',
                scrollTrigger: {
                    trigger: '.hidden-image',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div>

            <img
                className="hidden-image img-fluid"
                src="/images/service-1.png"
                alt="Reveal Image"
            />
        </div>
    );
};

export default ImageReveal;
