import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-700 dark:text-white text-2xl md:hidden"
        >
          <i className="ri-menu-2-line"></i>
        </button>

        {/* Logo & Title (Only on Desktop) */}
        <a
          href="https://flowbite.com/"
          className="hidden md:flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>

        <ul className="hidden md:flex space-x-8 font-medium">
  <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-700">Home</a></li>
  <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-700">About</a></li>
  <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-700">Services</a></li>
  <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-700">Contact</a></li>
</ul>


        {/* Contact Me Button */}
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Contact Me
        </button>
      </div>

      {/* Sidebar (Only when Open) */}
      <div
        className={`fixed top-0 left-0 w-1/2 h-full bg-gray-900 text-white transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <i className="ri-close-line"></i>
        </button>
        <ul className="mt-20 space-y-4 text-center">
          <li><a href="#" className="block py-2">Home</a></li>
          <li><a href="#" className="block py-2">About</a></li>
          <li><a href="#" className="block py-2">Services</a></li>
          <li><a href="#" className="block py-2">Contact</a></li>
        </ul>
        
        {/* Social Media Icons */}
        <div className="absolute bottom-5 left-0 w-full flex justify-center gap-4">
          <a href="https://youtube.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
            <i className="ri-youtube-fill text-gray-400 text-xl hover:text-white transition-all"></i>
          </a>
          <a href="https://linkedin.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-fill text-gray-400 text-xl hover:text-white transition-all"></i>
          </a>
          <a href="https://tiktok.com//fatkhurrhnn" target="_blank" rel="noopener noreferrer">
            <i className="ri-tiktok-fill text-gray-400 text-xl hover:text-white transition-all"></i>
          </a>
          <a href="https://instagram.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-fill text-gray-400 text-xl hover:text-white transition-all"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;