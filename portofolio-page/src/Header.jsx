

function Header(){

    return (
        <div className="fixed top-0 w-full h-16 flex items-center">
            <div className="ml-auto mr-10">
                <nav>
                    <ul className="flex space-x-4 font-bold gap-2">
                        <li> <a href="#" className="text-black hover:text-blue-500">Home </a></li>
                        <li> <a href="#" className="text-black hover:text-blue-500">About</a></li>
                        <li> <a href="#" className="text-black hover:text-blue-500">Services</a></li>
                        <li> <a href="#" className="text-black hover:text-blue-500">Contact</a></li>
                    </ul>
                </nav>
            </div>
           
        </div>
    );

}

export default Header;