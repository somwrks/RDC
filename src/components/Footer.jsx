import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    
<footer className="p-4 mt-5 bg-opacity-50 bg-white rounded-lg shadow md:px-6 md:py-8 light:bg-light-900">
    {/* <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-dark">Raj Diagnostic Centre</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <Link to="/about" className="mr-4 text-xl hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
                <Link to="/contact" className="mr-4 text-xl hover:underline md:mr-6 ">Contact Us</Link>
            </li>
            <li>
                <Link to="/book" className="mr-4 text-xl hover:underline md:mr-6">Book an Appointment</Link>
            </li>
            <li>
                <a href="https://google.com" className=" text-xl hover:underline">Privacy Policy</a>
            </li>
        </ul>
    </div> */}
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Raj Diagnostic Centre™</a>. All Rights Reserved.
    </span>
</footer>

  )
}