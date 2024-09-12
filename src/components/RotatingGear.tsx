"use client";
import { Gear } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";

interface RotatitngGearProps {}

const RotatingGear: React.FC<RotatitngGearProps> = ({}) => {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    // Calculate rotation based on scroll position
    const scrollFactor = 10; // Change this value to control speed (higher is slower)
    const newRotation = (window.scrollY / scrollFactor) % 360; //

    setRotation(newRotation);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    // <animated.div style={props}>
    <Gear
      className="gear-home"
      style={{
        transform: `rotate(${rotation}deg)`,
        // transition: "transform 0.1s ease-out",
      }}
    />
    // </animated.div>
  );
};

export default RotatingGear;
