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
    const sections = ["home", "about", "projects", "contacts"];
    const scrollPosition = window.scrollY;
  
    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
  
        // Verifica se o scroll está dentro dos limites da seção atual
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="justify-center overflow-auto transition-all antialiased">
      <Nav activeSection={activeSection} />
      <div className="snap-y snap-mandatory">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
