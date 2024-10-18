import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header.jsx";
import { Avatar } from "@mui/material";
import Background from "../src/assets/BG-Lake.jpg"
import Profile from "../src/assets/Profile.jpeg"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
    return (
        <>
            <div className="w-full h-16 flex flex-col items-center p-4 bg-black">
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
            <div style={{
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with 50% transparency
                    backgroundBlendMode: "overlay", 
                }}className="bg-gray-600 flex flex-row items-center text-white w-full justify-center pt-10 pb-10">
                <div className="flex flex-col font-semibold w-1/2 text-4xl gap-2">
                    <p>Hi,</p>
                    <p>I'm <span className="text-sky-300">Christopher Edmund Haryanto</span></p>
                    <p>a Data Analyst</p>
                </div>
                    <div className="flex flex-col w-1/4 ">
                        <img src={Profile} alt="" className="rounded-full w-96" />
                    </div>
                </div>

        </>

    );
}

export default App;
