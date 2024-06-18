import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div>
                <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/agustina-sosa00" className="hover:underline">Sosa Agustina WEB-FT47</a>. All Rights Reserved. 
                                </span>
                                <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                                <Link href='/'><span className="hover:underline me-4 md:me-6">Home</span></Link>
                                <Link href='/about'><span className="hover:underline me-4 md:me-6">About</span></Link>
                                <Link href='/asdd'><span className="hover:underline me-4 md:me-6">Privacy Policy</span></Link>
                                <Link href='/abc'><span className="hover:underline">Licensing</span></Link>
                                </div>
                        </div>
                </footer>
        </div>
    )
}

export default Footer;