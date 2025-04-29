"use client";

import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Tools", href: "#tools" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
    };

    handleResize(); // check initially

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  interface MenuItem {
    name: string;
    href: string;
  }

  const handleClick = (href: string, index: number): void => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = menuItems.findIndex(
              (item) => `#${entry.target.id}` === item.href
            );
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = menuItems.map((item) => document.querySelector(item.href));
    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="menuContainer menuContainerPartial">
      {menuItems.map((item, index) => {
        if (isMobile) {
          return (
            activeSection === index && (
              <button
                key={index}
                onClick={() => handleClick(item.href, index)}
                className={`menuItem menuItemActive`}
              >
                {item.name}
              </button>
            )
          );
        } else
          return (
            <button
              key={index}
              onClick={() => handleClick(item.href, index)}
              className={`menuItem ${
                activeSection === index ? "menuItemActive" : ""
              }`}
            >
              {item.name}
            </button>
          );
      })}
    </nav>
  );
}
