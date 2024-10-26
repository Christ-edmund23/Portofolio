import React from "react";
import transition from '../transition';

function Contact (){

    return(
        <>
        <div className="bg-lime-300 h-screen">
            <h1 className="w-[80%] text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-[1] uppercase text-center">Contact Page</h1>
        </div>
        </>
    );
}

export default transition(Contact);