import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header.jsx";
import { Avatar } from "@mui/material";
import Background from "../src/assets/BG-Lake.jpg"
import Profile from "../src/assets/Profile.jpeg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
    return (
        <>
            <div className="w-full px-8 py-8 flex flex-col items-center p-4 bg-black">
                <div className="ml-auto mr-20">
                    <nav>
                        <ul className="flex space-x-4 font-bold gap-4">
                            <li> <a href="#" className="text-white hover:text-blue-500">Home </a></li>
                            <li> <a href="#" className="text-white hover:text-blue-500">About Me</a></li>
                            <li> <a href="#" className="text-white hover:text-blue-500">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <section id='home'>
                <div style={{
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with 70% transparency
                    backgroundBlendMode: "overlay", 
                }}className="bg-gray-600 flex flex-row items-center text-white w-full justify-center pt-10 pb-10">
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
                        <div>
                            <button
                                className='px-2 py-2 pl-4 pr-2 bg-sky-600 rounded-full flex items-center gap-1'
                                onClick={() => {
                                    document.getElementById('about-me').scrollIntoView({behavior:'smooth'})
                                }}>
                                About Me
                                <ArrowDropDownIcon />
                            </button>
                        </div>
                    </div>
                        <div className="flex flex-col w-1/4 ">
                            <img src={Profile} alt="" className="rounded-full" />
                        </div>
                </div>
            </section>
            <section id='about-me'>

            </section>

        </>

    );
}

export default App;
