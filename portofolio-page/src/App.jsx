import Header from "./Header.jsx";
import { Avatar } from "@mui/material";
import Background from "../src/assets/BG-Lake.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
    return (
        <>
            <div className="fixed top-0 w-full h-16 flex flex-col items-center p-4">
                <div className="ml-auto mr-20">
                    <nav>
                        <ul className="flex space-x-4 font-bold gap-4">
                            <li> <a href="#" className="text-black hover:text-blue-500">Home </a></li>
                            <li> <a href="#" className="text-black hover:text-blue-500">About Me</a></li>
                            <li> <a href="#" className="text-black hover:text-blue-500">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-60 flex flex-col items-center">
                    <img src={Background} alt="" className="w-40 h-40 rounded-full" />
                    <h2 className="text-xl font-bold mt-4 mb-2">Christopher Edmund Haryanto</h2>
                    <h3 className="mb-4">Data Analyst</h3>
                    <div className="flex flex-row gap-4">
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>
                </div>
                
            </div>
        </>

    );
}

export default App;
