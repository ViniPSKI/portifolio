'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Nav from "./ui/nav";
import Home from "./ui/home";
import About from "./ui/about";
import Projects from "./ui/projects";
import Contact from "./ui/contact";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition < windowHeight) {
      setActiveSection("home");
    } else if (scrollPosition < windowHeight * 2) {
      setActiveSection("about");
    } else if (scrollPosition < windowHeight * 3) {
      setActiveSection("projects");
    } else {
      setActiveSection("contacts");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="justify-center overflow-auto transition-all">
      <Nav activeSection={activeSection} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
