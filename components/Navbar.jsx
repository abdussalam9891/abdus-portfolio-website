"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {

    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header background"
          className="w-full"
        />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
        ${isScroll ? "bg-white/80 dark:bg-gray-900 backdrop-blur-lg shadow-sm" : ""}
      `}>

        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
          ${isScroll ? "" : "bg-white/50 dark:bg-gray-900 shadow-sm"}
        `}>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">

          <button
            aria-label="Toggle theme"
            onClick={() => setIsDarkMode(prev => !prev)}
          >
            <Image
              src={assets.moon_icon}
              alt="theme icon"
              className="w-6"
            />
          </button>

          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image
              src={assets.menu_black}
              alt="menu icon"
              className="w-6"
            />
          </button>

        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-gray-900 transition duration-500"
        >

          <button
            className="absolute right-6 top-6"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <Image
              src={assets.close_black}
              alt="close menu"
              className="w-5"
            />
          </button>

          <li><a onClick={closeMenu} href="#top">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About me</a></li>
          <li><a onClick={closeMenu} href="#work">My Work</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact me</a></li>

        </ul>

      </nav>
    </>
  );
};

export default Navbar;
