import { Link } from "react-router-dom";
import React from "react";

function navbar (){

    return(
        <>
        <div className="px-8 py-8 flex flex-row items-center p-4 bg-slate-800 text-white">
                <div className="mr-auto ml-20">
                    <nav className=" flex space-x-8 font-bold">
                        <div className="nav-links">
                            <div className="nav-items">
                                <Link className='nav-link hover:text-sky-500' to ="/">
                                    <h1 className="font-bold font-sans text-2xl">PORTOFOLIO</h1>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="ml-auto mr-20">
                    <nav className=" flex space-x-8 font-bold">
                        <div className="nav-links">
                            <div className="nav-items">
                                <Link className='nav-link hover:text-sky-500' to ="/home">
                                    Home
                                </Link>
                            </div>
                        </div>
                        <div className="nav-links">
                            <div className="nav-items">
                                <Link className='nav-link hover:text-sky-500' to ="/about">
                                    About Me
                                </Link>
                            </div>
                        </div>
                        <div className="nav-links">
                            <div className="nav-items">
                                <Link className='nav-link hover:text-sky-500' to ="/contact">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default navbar;