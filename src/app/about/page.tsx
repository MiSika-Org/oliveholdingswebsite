"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import Circles from "@/components/about/Circles";
import BottomSlider from "@/components/home/BottomSlider";
import AboutCard from "@/components/about/AboutCard";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <Header />
      <div className="flex flex-col about">
        <div className="top-section">
          <div className="top-section-item">
            <div className="top-section-item-title">About Us</div>
            <div className="top-section-item-body">
              This is where aspiration meets innovation, candor fuels
              collaboration and impossible surrenders to teamwork. We champion
              the bold to achieve the extraordinary.
            </div>
          </div>
        </div>
        <div className="about-bottom flex flex-row">
          <Circles currentIndex={currentIndex} />
          <BottomSlider autoPlay onChange={setCurrentIndex}>
            <AboutCard />
            <AboutCard />
            <AboutCard />
            <AboutCard />
            <AboutCard />
            <AboutCard />
          </BottomSlider>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AboutUs;
