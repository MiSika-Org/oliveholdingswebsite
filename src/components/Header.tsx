"use client";

import { Dismiss24Filled, Navigation24Filled } from "@fluentui/react-icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface HeaderProps {
  fromHome?: boolean;
}

const Drawer = ({ isOpen }: { isOpen: boolean }) => (
  <div className={`drawer__Container ${isOpen && "drawer__Container--isOpen"}`}>
    <div className="  flex flex-col gap-5">
      <a href="/about" className="link">
        About Us
      </a>
      <a href="/team" className="link">
        Team
      </a>
      <a href="/portfolio" className="link">
        Our Portfolio
      </a>
      <a href="/impact" className="link">
        Impact
      </a>
      <a href="/contact" className="link">
        Contact Us
      </a>
      {/* <a href="/" className="link">
        |
      </a> */}
      <a href="/" className="link">
        Login
      </a>
    </div>
  </div>
);

const Header: React.FC<HeaderProps> = ({ fromHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [fixedCss, setFixedCss] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    // Calculate rotation based on scroll position
    const yScroll = window.scrollY; //
    if (yScroll >= 69.5938) {
      if (!fixedCss) {
        setFixedCss(true);
      }
    } else if (fixedCss) {
      setFixedCss(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  // 69.5938px

  return (
    <div
      className={`header flex justify-between flex-row items-center ${
        fixedCss && fromHome ? "header-home" : ""
      }`}
      style={{
        paddingTop: fromHome ? "29px" : "13px",
        color: fromHome ? "white" : "black",
        backgroundColor: fromHome ? "transparent" : "white",
        position: fromHome ? "absolute" : "fixed",
      }}
    >
      <a href="/" className="logo-image">
        <Image
          src={"/static/images/logo.png"}
          alt={"logo"}
          fill
          style={{ zIndex: 1 }}
          // width={150}
          // height={"100%"}
        />
        <div className="logo-image-background" />
      </a>
      <div className="links  flex flex-row">
        <a href="/about" className="link">
          About Us
        </a>
        <a href="/team" className="link">
          Team
        </a>
        <a href="/portfolio" className="link">
          Our Portfolio
        </a>
        <a href="/impact" className="link">
          Impact
        </a>
      </div>
      <div className="left-links flex flex-row">
        <a href="/contact" className="link">
          Contact Us
        </a>
        <div className="link">|</div>
        <a href="#" className="link">
          Login
        </a>
      </div>
      <button className="ham" onClick={toggleDrawer}>
        {isOpen ? <Dismiss24Filled /> : <Navigation24Filled />}
      </button>
      <Drawer isOpen={isOpen} />
    </div>
  );
};

export default Header;
