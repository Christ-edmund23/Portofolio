import React from 'react';
import { Routes, Route, useLocation} from "react-router-dom"
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Cover from './Pages/Cover';


function App() {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element = {<Cover />} />
                    <Route path= '/home' element ={<Home />} />
                    <Route path='/about' element ={<About />} />
                    <Route path='/contact' element ={<Contact />} />
                </Routes>
            </AnimatePresence>
            
        </>

    );
}

export default App;
