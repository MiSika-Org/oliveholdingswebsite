import React from "react";

interface HomeSlideProps {
  slide: {
    sliderImage: string;
  };
}

const HomeSlide: React.FC<HomeSlideProps> = ({ slide }) => {
  return (
    <div
      className="home-background  text-white "
      style={{
        backgroundImage: `url(/static/images/hero/${slide.sliderImage})`,
      }}
    ></div>
  );
};

export default HomeSlide;
