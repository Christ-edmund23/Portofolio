import React, {useState} from "react";
import transition from '../components/transition';
import Background from '../assets/contact-BG.jpg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion";

function Contact (){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function test(){
        let item = {name, email,message}
        console.warn(item)
    }

    return(
        <>
        <div
        className="h-screen text-white"
        style={{
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 70% transparency
                    backgroundBlendMode: "overlay", 
                }}
        >
            <div className="flex justify-center items-center h-screen w-screen ">
                <div className="flex flex-col bg-slate-800  border-2 border-slate-700 top rounded-lg w-1/2 h-1/2">
                    <div className="text-4xl p-4 font-mono mb-5 mt-5 flex items-center justify-center font-bold">
                        Contact
                    </div>
                        <div className="flex flex-row justify-center items-center">
                            {/* Left Section */}
                            <div className="flex flex-col justify-center items-center w-1/2 gap-5">
                                <div className="flex flex-row items-center gap-5 bg-gray-900 px-4 py-4 w-3/4 ">
                                    <LocalPhoneIcon />
                                    <h3 >+6281212605579</h3>
                                </div>
                                <div className="flex flex-row items-center gap-5 bg-gray-900 px-4 py-4 w-3/4">
                                    <EmailIcon />
                                    <h3 >christ.edmund@gmail.com</h3>
                                </div>
                                <div className="flex flex-row items-center gap-5 bg-gray-900 px-4 py-4 w-3/4">
                                    <LinkedInIcon />
                                    <h3 >Christopher Edmund Haryanto</h3>
                                </div>
                                <div className="flex flex-row items-center gap-5 bg-gray-900 px-4 py-4 w-3/4">
                                    <InstagramIcon />
                                    <h3 >Christ_edmund23</h3>
                                </div>
                            </div>
                            <div className="border-l-2 border-gray-500 h-full" />
                            {/* Right Section */}
                            <div className="flex flex-col items-center gap-4 w-1/2">
                                <input 
                                    className="bg-gray-900 w-3/4 text-white p-2 pl-4 text-sm" 
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                />
                                <input 
                                    className="bg-gray-900 w-3/4 text-white p-2 pl-4 text-sm" 
                                    placeholder="Email Address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                <textarea 
                                    className="bg-gray-900 w-3/4 text-white p-2 pl-4 text-sm text-balance max-h-32 min-h-20" 
                                    placeholder="add a message..." 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} 
                                />
                                <motion.button  
                                    whileTap = {{scale: 0.9}} 
                                    whileHover = {{
                                        scale : 1.1, 
                                        backgroundColor : "#d1d5db", 
                                        color: "#000000",
                                    }}
                                    transition={{
                                        bounceDamping: 10, 
                                        bounceStiffness: 600
                                    }}
                                    className=" bg-emerald-600 w-3/4 py-1 rounded-lg text-gray-100 font-light tracking-wid font bold"
                                    onClick={test}
                                    >
                                        Send
                                </motion.button >
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default transition(Contact);