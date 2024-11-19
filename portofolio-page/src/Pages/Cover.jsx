import React from 'react';
import Background from "../assets/BG-Lake.jpg"
import { motion } from 'framer-motion'
import transition from '../components/transition'
import '../Pages/Cover.css'


const InitialAnimation = {
    hidden : { opacity: 0 },
    show: {opacity : 1}
}


function Cover() {
    return (
        <>
            <div 
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.9)", // Black with 70% transparency
                    backgroundBlendMode: "overlay", 
                }}
                >
                <motion.section
                    className='items-center text-white justify-center h-screen '
                    variants={InitialAnimation} 
                    initial = "hidden"
                    animate = "show"
                >    
                    <div class="wrapper" className='flex justify-center items-center h-full relative'>
                        <svg>
                            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                                Welcome
                            </text>
                        </svg>
                    </div>
                </motion.section>    
            </div>
        </>

    );
}

export default transition(Cover);
