import React from "react";
import Image from "next/image";

interface HomeSlideProps {}

const HomeSlide: React.FC<HomeSlideProps> = ({}) => {
  return (
    <div className="home-background  text-white ">
      <div className="home">
        <div className="home-title">
          A Transformative Platform Connecting West Africa To a $155B Global
          Food & Agribusiness Market
        </div>
        <div className="home-subtitle">
          Connecting Investors, DEFIs, and Agribusinesses with Insights and
          Opportunities for Sustainable Development
        </div>
        <button className="home-button flex flex-row items-center justify-center">
          <p>Invest with Us</p>{" "}
          <Image
            src={"/static/images/right-arrow.png"}
            alt="button-arrow"
            className="button-image"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default HomeSlide;
