import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from "../assets/BG-Lake.jpg"
import Profile from "../assets/Profile.jpeg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { motion } from 'framer-motion'
import { useState } from 'react'
import transition from '../transition';

const InitialAnimation = {
    hidden : { opacity: 0 },
    show: {
        opacity : 1,
        transition : {
            staggerChildren: 2,
        },
    },
}

function Home() {

    return (
        <>
            <div 
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with 70% transparency
                    backgroundBlendMode: "overlay", 
                }}
                >
                <motion.section
                    variants={InitialAnimation}
                    initial = "hidden"
                    animate = "show"
                    >
                    <motion.div className=''>
                        <motion.div className="flex flex-row items-center text-white w-full justify-center pt-10 pb-10 flex justify-center h-screen w-screen ">
                            <div className="flex flex-col w-1/2">
                                <div className='text-3xl gap-2 font-semibold mb-5'>
                                    <p>Hello,</p>
                                    <p>I'm <span className="text-sky-300">Christopher Edmund Haryanto</span></p>
                                    <p>a Data Analyst</p>
                                </div>
                                <div className='text-sm text-wrap text-balance w-3/4 mb-4'>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </p>
                                </div>
                            </div>
                                <div className="flex flex-col w-1/4 ">
                                    <img src={Profile} alt="" className="rounded-full" />
                                </div>
                        </motion.div>
                    </motion.div>
                    {/* About Us Section */}
                    <motion.div className=''>

                    </motion.div>
                </motion.section>    
            </div>
        </>

    );
}

export default transition(Home);
