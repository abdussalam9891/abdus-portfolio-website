"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode, mounted }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header background"
          width={1200}
          height={400}
          className="w-full"
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
          ${isScroll ? "bg-white/80 dark:bg-gray-900 backdrop-blur-lg shadow-sm" : ""}
        `}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            width={112}
            height={40}
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
            ${isScroll ? "" : "bg-white/50 dark:bg-gray-900 shadow-sm"}
          `}
        >
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            {mounted && (
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt="theme toggle icon"
                width={24}
                height={24}
                className="w-6"
              />
            )}
          </button>

          <button
            className="block md:hidden ml-3"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu icon"
              width={24}
              height={24}
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen
            bg-white dark:bg-gray-900 transition-transform duration-500
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <li className="absolute right-6 top-6">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="close menu"
                width={20}
                height={20}
                className="w-5"
              />
            </button>
          </li>

          <li><a onClick={() => setMenuOpen(false)} href="#top">Home</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#about">About me</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#work">My Work</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
