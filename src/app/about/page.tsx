"use client";
import Header from "@/components/Header";
import React, { useRef, useState } from "react";
import Circles from "@/components/about/Circles";
import BottomSlider from "@/components/home/BottomSlider";
import AboutCard from "@/components/about/AboutCard";
import type { Carousel as CarouselType } from "react-responsive-carousel";
import { rings } from "@/data/about";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  const carouselRef = useRef<CarouselType>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <Header />
      <div className="flex flex-col about">
        <div className="top-section">
          <div className="overlay" />
          <div className="top-section-item">
            <div className="top-section-item-title">About Us</div>
            <div className="top-section-item-body">
              Olive Holdings (&quot;Olive&quot;) is a specialized investment
              holding platform that plays a pivotal role in transforming the
              agricultural landscape in West Africa. Olive has developed a
              robust enterprise model for scaling agribusinesses it invests in,
              and providing immense positive impact and returns to stakeholders
              involved. Currently, Olive is dedicated to connecting over 7
              million farmers in West Africa with lucrative global markets
              valued at more than $155 billion.
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
            {rings.map((r, index) => (
              <AboutCard key={index} body={r.body} title={r.title} />
            ))}
            {/* <AboutCard />
            <AboutCard />
            <AboutCard />
            <AboutCard />
            <AboutCard /> */}
            {/* <AboutCard /> */}
          </BottomSlider>
        </div>
        <div className="vision-section">
          <div className="about-bottom-item">
            <div className="about-bottom-item-title">Our Vision</div>
            <div className="about-bottom-item-body">
              Our vision is to fundamentally transform the West African
              agribusiness landscape by building systems that scale promising
              export-oriented agribusinesses and economically empower all
              participants in the ecosystem.
            </div>
          </div>
          <div className="about-bottom-item">
            <div className="about-bottom-item-title">Our Pledge</div>
            <div className="about-bottom-item-body">
              We are committed to fostering an environment of diversity, equity,
              and inclusion—both within our own walls and throughout the broader
              venture community. Human capital is our most valuable asset. Our
              culture, reputation, and achievements are the collective product
              of our individual differences, life experiences, self-expression,
              and unique capabilities that our team members and partners pour
              into their work daily.
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AboutUs;
