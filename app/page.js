"use client";

import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [isDarkMode]);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">

      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />

    </div>
  );
}
