import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from "../src/assets/BG-Lake.jpg"
import Profile from "../src/assets/Profile.jpeg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Routes, Route, useLocation} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact';
import { AnimatePresence } from 'framer-motion';

const InitialAnimation = {
    hidden : { opacity: 0 },
    show: {
        opacity : 1,
        transition : {
            staggerChildren: 2,
        },
    },
}

function App() {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route index element ={<Home />} />
                    <Route path='/about' element ={<About />} />
                    <Route path='/contact' element ={<Contact />} />
                </Routes>
            </AnimatePresence>
            
        </>

    );
}

export default App;
