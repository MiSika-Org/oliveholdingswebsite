import React from "react";

interface AboutCardProps {
  body?: string;
  title?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ body, title }) => {
  return (
    <div className="about-slider">
      <div className="top-section-item-title">
        {title || "Unlocking Global Markets for Local Farmers"}
      </div>
      <div className="about-slider-text">
        {body ||
          "Olive Holdings is a specialized investment platform focused on transforming the agricultural landscape in West Africa. By connecting over 7 million farmers to lucrative global markets valued at over $155 billion, Olive is driving economic growth and improving livelihoods in the region."}
      </div>
      {/* <div className="flex justify-between items-center">
        <div className="flex flex-row gap-15">
          <div className="action-circle" />
          <div className="action-circle" />
          <div className="action-circle" />
          <div className="action-circle" />
          <div className="action-circle" />
        </div>
      </div> */}
    </div>
  );
};

export default AboutCard;
