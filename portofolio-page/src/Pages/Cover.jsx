import React from 'react';
import Background from "../assets/BG-Lake.jpg"
import { motion } from 'framer-motion'
import transition from '../components/transition'
import '../Pages/Cover.css'
import { useNavigate } from 'react-router-dom';

const InitialAnimation = {
    hidden : { opacity: 0 },
    show: {opacity : 1}
}


function Cover() {
    const navigate = useNavigate('');

    const handleNavigate = () => {
        navigate("/home");
    }

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
                <div className='flex flex-col items-center justify-center h-screen'>
                    <div class="wrapper" className='w-full flex justify-center items-center'>
                        <svg>
                            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                                Welcome
                            </text>
                        </svg>
                    </div>
                    <motion.button
                        whileTap={{scale : 0.9}}
                        whileHover={{
                            scale : 1.1,
                            backgroundColor : "#0000000",
                            border: "2px solid rgb(0, 191, 255)",
                            color: "rgb(0, 191, 255)"
                        }}
                        className='bg-sky-600 flex justify-center w-52 h-12 py-2 rounded-lg tracking-wide font-semibold text-xl items-center'
                        onClick={handleNavigate}
                    >
                        Home
                    </motion.button>
                </div>
                    
                </motion.section>    
            </div>
        </>

    );
}

export default transition(Cover);
