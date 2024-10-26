import { Link } from "react-router-dom";
import React from "react";

function navbar (){

    return(
        <>
        <div className="px-8 py-8 flex flex-row items-center p-4 bg-black text-white">
            <Link className='nav-link' to ="/">
                            Logo
             </Link>
                <div className="ml-auto mr-20">
                    <nav className=" flex space-x-8 font-bold">
                        <div className="nav-links">
                            <div className="nav-items">
                                <Link className='nav-link hover:text-sky-500' to ="/">
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