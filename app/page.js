"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  // Read localStorage once at init — no useEffect needed for this
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  // Single effect — only applies the class and saves preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
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
