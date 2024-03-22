"use client";
import React, { useEffect, useState } from "react";
import styles from "@/components/navBar/page.module.css";

export default function NabBar() {
  const [isScroll, setIsScroll] = useState(0);

  useEffect(() => {
    const scrollPosition = () => {
      if (window.scrollY) {
        let scrolledPosition = Math.round(window.scrollY);
        setIsScroll((prev) => scrolledPosition);
      }
    };
    window.addEventListener("scroll", scrollPosition);
    return () => {
      window.removeEventListener("scroll", scrollPosition);
    };
  }, []);

  const actScr = isScroll > 100 ? styles.activeScrolled : "";
  const nab = styles.navBar;

  return (
    <header className={`${nab} ${actScr}`}>
      <div className={styles.navItemContainer}>
        <h1 className={styles.logo}>MGC</h1>
        <div className={styles.navItems}>
          <span className={styles.navItem}>ABOUT</span>
          <span className={styles.navItem}>PROJECTS</span>
          <span className={styles.navItem}>EXPERTISE</span>
          <span className={styles.navItem}>CONTACT US</span>
        </div>
      </div>
    </header>
  );
}
