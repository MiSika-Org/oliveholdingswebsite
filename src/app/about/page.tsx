"use client";
import Header from "@/components/Header";
import React, { useRef, useState } from "react";
import Circles from "@/components/about/Circles";
import BottomSlider from "@/components/home/BottomSlider";
import AboutCard from "@/components/about/AboutCard";
import type { Carousel as CarouselType } from "react-responsive-carousel";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  const carouselRef = useRef<CarouselType>(null);
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
          <Circles
            currentIndex={currentIndex}
            carouselRef={carouselRef}
            onChange={setCurrentIndex}
          />
          <BottomSlider
            autoPlay
            onChange={setCurrentIndex}
            carouselRef={carouselRef}
            currentIndex={currentIndex}
          >
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
