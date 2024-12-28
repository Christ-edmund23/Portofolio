import React from 'react';
import Background from "../assets/BG-Lake.jpg"
import Profile from "../assets/Profile.jpeg"
import { motion } from 'framer-motion'
import transition from '../components/transition'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/about");
    }

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
                        <motion.div 
                        className="flex flex-row items-center text-white pt-10 pb-10 justify-center h-screen w-screen "
                        initial = {{opacity : 0 ,y :-100}}
                        animate = {{opacity : 1 ,y : 0}}
                        transition={{duration : 1, ease: 'easeIn', delay: 0.2}}
                        >
                            <div className="flex flex-col w-1/2">
                                <div className='text-3xl gap-2 font-semibold mb-5'>
                                    <p>Hello,</p>
                                    <p>I'm <span className="text-sky-300">Christopher Edmund Haryanto</span></p>
                                    {/* <p>a Data Analyst</p> */}
                                </div>
                                <div className='text-xl text-balance w-3/4 mb-4 mt-4'>
                                    <p>
                                        I am Computer Science student at Binus University with a keen interest in starting my carrer in the
                                        Tech Industry. Eager to apply academic knowledge in a real-world setting, coupled with excellent
                                        communication skills and a passion for staying abreast of emerging technologies.
                                    </p>
                                </div>
                                <motion.button
                                whileTap={{scale : 0.9}}
                                whileHover={{
                                    scale : 1.1,
                                    backgroundColor : "#0000000",
                                    border: "2px solid rgb(0, 191, 255)",
                                    color: "rgb(0, 191, 255)"
                                }}
                                className='bg-sky-600 flex justify-center w-24 py-2 rounded-lg tracking-wide font-semibold'
                                onClick={handleNavigate}
                                >
                                    About Me
                                </motion.button>
                            </div>
                                <div className="flex flex-col w-1/4 ">
                                    <img src={Profile} alt="" className="rounded-full" />
                                </div>
                        </motion.div>
                </motion.section>    
            </div>
        </>

    );
}

export default transition(Home);
