"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className={styles.logoAk}>AK</span>
          <span className={styles.logoDot}> /</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:akshaykale6705@gmail.com"
              className={styles.cta}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
        </button>
      </div>
    </nav>
  );
}
